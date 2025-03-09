"use client";

import { Accordion, AccordionItem } from "@heroui/react";
import React from "react";

export default function fqa() {
  return (
    <Accordion variant="shadow">
      <AccordionItem
        key="1"
        aria-label="Accordion 1"
        title="Berapa biaya untuk mendapatkan kode autentikasi?"
      >
        <p className="text-sm text-neutral-700">
          Kami menawarkan harga yang sangat terjangkau bagi siswa SMA Al-Abidin.
          Kode autentikasi dapat diperoleh hanya dengan
          <strong>Rp50.000</strong>
        </p>
      </AccordionItem>
      <AccordionItem
        key="2"
        aria-label="Accordion 2"
        title="Berapa lama masa aktif kode autentikasi dalam satu kali pembelian?"
      >
        <p className="text-sm text-neutral-700">
          <strong>Kode autentikasi bersifat permanen</strong>. Selama Anda tidak
          menginstal ulang laptop atau aplikasi kami, lisensi akan tetap aktif
          tanpa batas waktu.
        </p>
      </AccordionItem>
      <AccordionItem
        key="3"
        aria-label="Accordion 3"
        title="Berapa kali satu kode autentikasi dapat digunakan?"
      >
        <p className="text-sm text-neutral-700">
          Kode autentikasi hanya dapat digunakan untuk 1x aktivasi, baik di
          laptop yang berbeda maupun di laptop yang sama. Kami menyarankan untuk
          segera mengaktifkan kode setelah pembelian agar tidak disalahgunakan
          oleh pihak lain. Perlu diperhatikan, kehilangan atau kebocoran kode
          sebelum aktivasi tidak termasuk dalam garansi.
        </p>
      </AccordionItem>
      <AccordionItem
        key="4"
        aria-label="Accordion 4"
        title="Apa jaminan keamanan yang diberikan kepada pengguna?"
      >
        <p className="text-sm text-neutral-700">
          Kami menjamin 100% keamanan aplikasi dari sistem deteksi milik
          sekolah. Namun, kami tidak dapat menjamin jika Anda tertangkap oleh
          pengawas ujian secara langsung. Harap diingat, perlindungan yang kami
          berikan hanya bersifat digital dan terbatas pada sistem.
        </p>
      </AccordionItem>
      <AccordionItem
        key="5"
        aria-label="Accordion 5"
        title="Bagaimana sistem garansi yang diberikan kepada pengguna?"
      >
        <p className="text-sm text-neutral-700">
          Kami menawarkan garansi 110%, yang berarti Anda akan mendapatkan
          pengembalian 100% dari uang pembelian ditambah 10% sebagai kompensasi
          jika aplikasi tidak berfungsi sebagaimana mestinya.
        </p>
      </AccordionItem>
      <AccordionItem
        key="6"
        aria-label="Accordion 6"
        title="Bagaimana jika aplikasi tidak berfungsi sesuai yang dijanjikan?"
      >
        <p className="text-sm text-neutral-700">
          Kami siap membantu Anda dalam menyelesaikan masalah. Cukup tekan
          tombol 'Butuh Bantuan', dan tim kami akan memberikan dukungan hingga
          aplikasi berjalan dengan baik. Jika setelah semua upaya aplikasi masih
          tidak dapat digunakan, Anda berhak mengajukan klaim garansi.
        </p>
      </AccordionItem>
      <AccordionItem
        key="7"
        aria-label="Accordion 7"
        title="Bagaimana dukungan pembaruan (support update) yang diberikan?"
      >
        <p className="text-sm text-neutral-700">
          Kami akan terus menyediakan pembaruan aplikasi untuk memastikan
          kompatibilitas dengan browser ujian PAS Semester 2 2025
        </p>
      </AccordionItem>
    </Accordion>
  );
}
