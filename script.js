const listMakanan = [
    {
        nama: "Nasi",
        manfaat: "Sumber energi utama (Karbohidrat). Mengandung Vit B, Magnesium & Zat Besi untuk saraf dan pertumbuhan sel.",
        img: "https://images.unsplash.com/photo-1516684732162-798a0062be99?w=500"
    },
    {
        nama: "Ayam Goreng",
        manfaat: "Protein Hewani tinggi. Bagus untuk metabolisme, kesehatan otak, dan massa otot.",
        img: "https://images.unsplash.com/photo-1562967914-608f82629710?w=500"
    },
    {
        nama: "Tempe Goreng",
        manfaat: "Protein Nabati & Antioksidan. Menjaga kesehatan jantung, pencernaan, dan tulang.",
        img: "https://www.astronauts.id/blog/wp-content/uploads/2023/12/Cara-Membuat-Resep-Tempe-Goreng-Tepung-Renyah-dan-Tahan-Lama-1024x678.jpg"
    },
    {
        nama: "Sayur Bayam",
        manfaat: "Super Vitamin (A, C, K) & Zat Besi. Mencegah anemia, jaga mata, dan imun tubuh.",
        img: "https://images.unsplash.com/photo-1576045057995-568f588f82fb?w=500"
    },
    {
        nama: "Jagung",
        manfaat: "Kaya Serat & Vit A. Melancarkan pencernaan dan bikin kenyang lebih lama.",
        img: "https://images.unsplash.com/photo-1551754655-cd27e38d2076?w=500"
    },
    {
        nama: "Apel",
        manfaat: "Vit C & Antioksidan. Booster imun dan sangat baik untuk jantung.",
        img: "https://images.unsplash.com/photo-1560806887-1e4cd0b6cbd6?w=500"
    },
    {
        nama: "Pepaya",
        manfaat: "Enzim Papain. Jagonya melancarkan pencernaan dan kesehatan kulit.",
        img: "https://asset.kompas.com/crops/WTRvLtV_gyjuZvaQRmDfifftdJc=/0x0:996x664/1200x800/data/photo/2020/06/25/5ef4204d9c44c.jpg"
    },
    {
        nama: "Air Putih",
        manfaat: "Mineral Esensial. Menjaga suhu tubuh, metabolisme, dan membuang racun.",
        img: "https://www.suarasurabaya.net/wp-content/uploads/2021/02/air-putih-840x493.jpg"
    }
];

const grid = document.getElementById('foodGrid');
const modal = document.getElementById('foodModal');
const modalContent = document.getElementById('modalContent');
const closeBtn = document.querySelector('.close-btn');

// Render Makanan
listMakanan.forEach((m, index) => {
    const card = document.createElement('div');
    card.className = 'item-makanan';
    card.innerHTML = `
        <img src="${m.img}" alt="${m.nama}">
        <div class="nama-overlay"><h3>${m.nama}</h3></div>
    `;
    card.onclick = () => {
        modalContent.innerHTML = `
            <h2 style="color:#10b981">${m.nama}</h2>
            <p style="font-size: 1.1rem">${m.manfaat}</p>
        `;
        modal.style.display = "block";
    };
    grid.appendChild(card);
});

// Close Modal logic
closeBtn.onclick = () => modal.style.display = "none";
window.onclick = (e) => { if(e.target == modal) modal.style.display = "none"; }