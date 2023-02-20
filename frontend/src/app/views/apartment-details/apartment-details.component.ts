import { Component, Input, Inject, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { Apartment } from 'src/app/shared/models/apartment';
import { DbService } from 'src/app/shared/services/db.service';
import * as THREE from 'three';

@Component({
  selector: 'app-apartment-details',
  templateUrl: './apartment-details.component.html',
  styleUrls: ['./apartment-details.component.scss'],
})
export class ApartmentDetailsComponent {

  apartment: Apartment = { amount: 0, type: '', image: '', description: '', price: 0 };
  id: any;
  panoViewer: any;

  constructor(@Inject(MAT_DIALOG_DATA) data: any, private db: DbService, private dialogRef: MatDialogRef<ApartmentDetailsComponent>, private router: Router) {
    this.id = data.id;
  }

  goLogin() {
    this.dialogRef.close();
    window.location.href = '/login'
  }

  order() {
    this.dialogRef.close();
    this.router.navigateByUrl(`/order/${this.id}`);
  }

  ngOnInit() {
    this.db.table('myStore1').get(this.id).then(data => {
      this.apartment = new Apartment(data.type, data.img, data.typeImg, data.description, data.price, data.amount, data.id)
    }).then(() => {
      const canvas = document.querySelector('#canvas') as HTMLCanvasElement;
      const renderer = new THREE.WebGLRenderer({ canvas });

      const fov = 75;
      const aspect = 2;  // the canvas default
      const near = 0.1;
      const far = 1000;
      const camera = new THREE.PerspectiveCamera(fov, aspect, near, far);
      camera.position.set(0, 0, 0.1);

      const scene = new THREE.Scene();

      const geometry = new THREE.SphereGeometry(500, 60, 40);
      // Invierte los valores de la imagen horizontalmente para que se muestre correctamente en la esfera
      geometry.scale(-1, 1, 1);

      // Agrega la imagen 360 a la esfera utilizando una textura
      const texture = new THREE.TextureLoader().load('data:' + this.apartment.typeImg + ';base64,' + this.apartment.image);
      const material = new THREE.MeshBasicMaterial({ map: texture });
      const mesh = new THREE.Mesh(geometry, material);

      scene.add(mesh);

      function render(time: any) {
        time *= 0.0002;

        renderer.setSize(canvas!.clientWidth, canvas!.clientHeight);

        camera.aspect = canvas!.clientWidth / canvas!.clientHeight;
        camera.updateProjectionMatrix();

        mesh.rotation.y = time;

        renderer.render(scene, camera);

        requestAnimationFrame(render);
      }
      requestAnimationFrame(render);
    })
  }
}
