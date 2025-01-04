export interface Kategori {
  pemasukan: string[];
  pengeluaran: string[];
}

export const categories: Kategori = {
  pemasukan: ["Gaji", "Bonus", "Penjualan", "Lainnya"],
  pengeluaran: ["Makan", "Transportasi", "Belanja", "Lainnya"],
};
