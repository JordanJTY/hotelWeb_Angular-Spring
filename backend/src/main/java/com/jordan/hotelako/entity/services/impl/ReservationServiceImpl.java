package com.jordan.hotelako.entity.services.impl;

import com.jordan.hotelako.entity.dao.IReservationDao;
import com.jordan.hotelako.entity.models.Reservation;
import com.jordan.hotelako.entity.services.IReservationService;
import net.sf.jasperreports.engine.*;
import net.sf.jasperreports.engine.data.JRBeanCollectionDataSource;
import net.sf.jasperreports.engine.util.JRLoader;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.core.io.ByteArrayResource;
import org.springframework.core.io.Resource;
import org.springframework.http.ContentDisposition;
import org.springframework.http.HttpHeaders;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.util.ResourceUtils;

import java.io.File;
import java.io.FileInputStream;
import java.text.SimpleDateFormat;
import java.util.*;

@Service
public class ReservationServiceImpl implements IReservationService {

    @Autowired
    private IReservationDao reservationDao;

    @Override
    public Reservation get(long id) {
        return reservationDao.findById(id).get();
    }

    @Override
    public List<Reservation> getAll() {
        return (List<Reservation>) reservationDao.findAll();
    }

    @Override
    public void post(Reservation reservation) {
        reservationDao.save(reservation);
    }

    @Override
    public void put(Reservation reservation, long id) {
        reservationDao.findById(id).ifPresent((x) -> {
            reservation.setId(id);
            reservationDao.save(reservation);
        });
    }

    @Override
    public void delete(long id) {
        reservationDao.deleteById(id);
    }

    @Override
    public ResponseEntity<Resource> exportInvoice(int idUser, int idReservation) {
        Optional<Reservation> optReservation = this.reservationDao.findByIdAndUserId(idUser, idReservation);
        Double rpta = this.reservationDao.totalByIdUser(idUser, idReservation);
        if (optReservation.isPresent()) {
            try {
                final Reservation reservation = optReservation.get();
                final File file = ResourceUtils.getFile("classpath:templates/exportReservation.jasper");
                final File imgLogo = ResourceUtils.getFile("classpath:images/logoAkoWithBackground.jpg");
                final JasperReport report = (JasperReport) JRLoader.loadObject(file);

                final HashMap<String, Object> parameters = new HashMap<>();
                parameters.put("nombreCliente", reservation.getAppUser().getUsername());
                parameters.put("imgLogo", new FileInputStream(imgLogo));
                parameters.put("total", rpta);
                parameters.put("dsInvoice", new JRBeanCollectionDataSource((Collection<?>) this.reservationDao.findById(idReservation)));

                JasperPrint jasperPrint = JasperFillManager.fillReport(report, parameters, new JREmptyDataSource());
                byte[] reporte = JasperExportManager.exportReportToPdf(jasperPrint);
                String sdf = new SimpleDateFormat("dd/MM/YYYY").format(new Date());
                StringBuilder stringBuilder = new StringBuilder().append("ReservationPDF:");
                ContentDisposition contentDisposition = ContentDisposition.builder("attachment")
                        .filename(stringBuilder.append(reservation.getId())
                                .append("generateDate:")
                                .append(sdf)
                                .append(".pdf")
                                .toString())
                        .build();
//                emailSender.sendEmail(reporte);
                HttpHeaders headers = new HttpHeaders();
                headers.setContentDisposition(contentDisposition);
                return ResponseEntity.ok().contentLength((long) reporte.length)
                        .contentType(MediaType.APPLICATION_PDF)
                        .headers(headers)
                        .body(new ByteArrayResource(reporte));
            } catch (Exception e) {
                e.printStackTrace();
            }
        } else {
            return ResponseEntity.noContent().build();
        }
        return null;
    }

    @Override
    public ResponseEntity<Resource> exportAverageReservationData(int year) {
        try {
            final File file = ResourceUtils.getFile("classpath:templates/exportDataReservations.jasper");
            final File imgLogo = ResourceUtils.getFile("classpath:images/logoAkoWithBackground.jpg");
            final JasperReport report = (JasperReport) JRLoader.loadObject(file);

            final HashMap<String, Object> parameters = new HashMap<>();
            parameters.put("imgLogo", new FileInputStream(imgLogo));
            parameters.put("year", year);

            JasperPrint jasperPrint = JasperFillManager.fillReport(report, parameters, new JRBeanCollectionDataSource(this.reservationDao.avgReservations(year)));
            byte[] reporte = JasperExportManager.exportReportToPdf(jasperPrint);
            String sdf = new SimpleDateFormat("dd/MM/YYYY").format(new Date());
            StringBuilder stringBuilder = new StringBuilder().append("ReservationPDF:");
            ContentDisposition contentDisposition = ContentDisposition.builder("attachment")
                    .filename(stringBuilder.append(Math.random() * 120)
                            .append("generateDate:")
                            .append(sdf)
                            .append(".pdf")
                            .toString())
                    .build();
            HttpHeaders headers = new HttpHeaders();
            headers.setContentDisposition(contentDisposition);
            return ResponseEntity.ok().contentLength((long) reporte.length)
                    .contentType(MediaType.APPLICATION_PDF)
                    .headers(headers)
                    .body(new ByteArrayResource(reporte));
        } catch (Exception e) {
            e.printStackTrace();
        }
        return null;
    }

    @Override
    public ResponseEntity<Resource> exportUserReservations(int idUser) {
        Iterable<Reservation> reservations = this.reservationDao.findByUser(idUser);
        String username = "";
        if (reservations.iterator().hasNext()) {
            username = reservations.iterator().next().getAppUser().getUsername();
            try {
                final File file = ResourceUtils.getFile("classpath:templates/exportUserReservations.jasper");
                final File imgLogo = ResourceUtils.getFile("classpath:images/logoAkoWithBackground.jpg");
                final JasperReport report = (JasperReport) JRLoader.loadObject(file);

                final HashMap<String, Object> parameters = new HashMap<>();
                parameters.put("nombreCliente", username);
                parameters.put("imgLogo", new FileInputStream(imgLogo));
                parameters.put("dsInvoice", new JRBeanCollectionDataSource((Collection<?>) reservations));

                JasperPrint jasperPrint = JasperFillManager.fillReport(report, parameters, new JREmptyDataSource());
                byte[] reporte = JasperExportManager.exportReportToPdf(jasperPrint);
                String sdf = new SimpleDateFormat("dd/MM/YYYY").format(new Date());
                StringBuilder stringBuilder = new StringBuilder().append("ReservationPDF:");
                ContentDisposition contentDisposition = ContentDisposition.builder("attachment")
                        .filename(stringBuilder.append(reservations.iterator().next().getId())
                                .append("generateDate:")
                                .append(sdf)
                                .append(".pdf")
                                .toString())
                        .build();
                HttpHeaders headers = new HttpHeaders();
                headers.setContentDisposition(contentDisposition);
                return ResponseEntity.ok().contentLength((long) reporte.length)
                        .contentType(MediaType.APPLICATION_PDF)
                        .headers(headers)
                        .body(new ByteArrayResource(reporte));
            } catch (Exception e) {
                e.printStackTrace();
            }
        } else {
            return ResponseEntity.noContent().build();
        }
        return null;
    }

    @Override
    public ResponseEntity<Resource> exportAverageAnnualProfit() {
        try {
            final File file = ResourceUtils.getFile("classpath:templates/exportAnnualProfit.jasper");
            final File imgLogo = ResourceUtils.getFile("classpath:images/logoAkoWithBackground.jpg");
            final JasperReport report = (JasperReport) JRLoader.loadObject(file);

            final HashMap<String, Object> parameters = new HashMap<>();
            parameters.put("imgLogo", new FileInputStream(imgLogo));

            JasperPrint jasperPrint = JasperFillManager.fillReport(report, parameters, new JRBeanCollectionDataSource(this.reservationDao.avgPriceperYear()));
            byte[] reporte = JasperExportManager.exportReportToPdf(jasperPrint);
            String sdf = new SimpleDateFormat("dd/MM/YYYY").format(new Date());
            StringBuilder stringBuilder = new StringBuilder().append("ReservationPDF:");
            ContentDisposition contentDisposition = ContentDisposition.builder("attachment")
                    .filename(stringBuilder.append(Math.random() * 120)
                            .append("generateDate:")
                            .append(sdf)
                            .append(".pdf")
                            .toString())
                    .build();
            HttpHeaders headers = new HttpHeaders();
            headers.setContentDisposition(contentDisposition);
            return ResponseEntity.ok().contentLength((long) reporte.length)
                    .contentType(MediaType.APPLICATION_PDF)
                    .headers(headers)
                    .body(new ByteArrayResource(reporte));
        } catch (Exception e) {
            e.printStackTrace();
        }
        return null;
    }

    @Override
    public ResponseEntity<Resource> exportApartmentUsage(int idApartment) {
        try {
            final File file = ResourceUtils.getFile("classpath:templates/exportApartmentUsage.jasper");
            final File imgLogo = ResourceUtils.getFile("classpath:images/logoAkoWithBackground.jpg");
            final JasperReport report = (JasperReport) JRLoader.loadObject(file);

            final HashMap<String, Object> parameters = new HashMap<>();
            parameters.put("imgLogo", new FileInputStream(imgLogo));
            parameters.put("dsInvoice", new JRBeanCollectionDataSource((Collection<?>) this.reservationDao.apartmentUsageCount(idApartment)));

            JasperPrint jasperPrint = JasperFillManager.fillReport(report, parameters, new JREmptyDataSource());
            byte[] reporte = JasperExportManager.exportReportToPdf(jasperPrint);
            String sdf = new SimpleDateFormat("dd/MM/YYYY").format(new Date());
            StringBuilder stringBuilder = new StringBuilder().append("ReservationPDF:");
            ContentDisposition contentDisposition = ContentDisposition.builder("attachment")
                    .filename(stringBuilder.append(Math.random() * 120)
                            .append("generateDate:")
                            .append(sdf)
                            .append(".pdf")
                            .toString())
                    .build();
            HttpHeaders headers = new HttpHeaders();
            headers.setContentDisposition(contentDisposition);
            return ResponseEntity.ok().contentLength((long) reporte.length)
                    .contentType(MediaType.APPLICATION_PDF)
                    .headers(headers)
                    .body(new ByteArrayResource(reporte));
        } catch (Exception e) {
            e.printStackTrace();
        }
        return null;
    }
}
