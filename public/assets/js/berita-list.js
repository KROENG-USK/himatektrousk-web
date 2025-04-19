$(document).ready(function () {
    fetch("https://picsum.photos/v2/list")
        .then(response => {
            if (!response.ok) {
                console.log(response.status)
                throw new Error("Network response was not ok");
            }
            return response.json()
        })
        .then(data => {  
            console.log(data)
            let id_baris = 0
            const container = $("#list-berita")
            container.empty()
            let rangkaBaris = `
                <div class="row gx-3 gy-3 justify-content-center" id = "id_${id_baris}" ></div>`
            container.append(rangkaBaris)
            data.forEach((el, index) => {
                console.log(el.id)
                const rangkaKolom = `
                <div class="col-sm-12 col-md-6 mb-sm-3 ">
                     <div class="card custom-card">
                        <img src="${el.download_url}" class="card-img-top" alt="${el.author}'s image" loading="lazy">
                        <div class="card-body">
                        <div class="tags-container">
                            <a href="#" class="tag tag-penting">penting</a>
                            <a href="#" class="tag tag-tropi">menang</a>
                            <a href="#" class="tag tag-hima">himpunan</a>
                            <a href="#" class="tag tag-event">event</a>
                            <a href="#" class="tag">umum</a>
                        </div>
                            <h5 class="card-title">Special title treatment</h5>
                            <p class="card-text">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquid eaque delectus eveniet quidem! Debitis illum eum quae odio dignissimos dolore repellendus libero, minima eius hic porro nam dicta iste pariatur!</p>
                            <div class="d-grid gap-2 d-md-block">
                                <a href="#" class="btn btn-primary ">Baca Lebih Lanjut</a>
                            </div>
                        </div>
                    </div>
                </div>`
                $(`#id_${id_baris}`).append(rangkaKolom)
                if ((index + 1 ) % 2  === 0){
                    console.log("xxx" + id_baris)
                    id_baris ++
                    let rangkaBaris = `
                        <div class="row gx-4 gy-4 justify-content-center" id = "id_${id_baris}" >
                        </div>`
                    container.append(rangkaBaris)
                }
            });
        })
        .catch(error => {
            console.error("Error fetching the image list:", error);
            $("#list-berita").html(
                `<div class="alert alert-danger d-flex align-items-center" role="alert">
                    <svg class="bi flex-shrink-0 me-2" role="img" aria-label="Danger:">
                        <use xlink:href="#exclamation-triangle-fill"/>
                    </svg>
                    <div>
                        Gagal memuat data. Silakan coba lagi nanti
                    </div>
                </div>`
                    )
        })
})

$(document).ready(function() {
    // Format dan tanggal
    function formatCurrentDate() {
        const now = new Date();
        const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
        return now.toLocaleDateString('id-ID', options);
    }
    
    // Update header
    $('.berita-date').text(formatCurrentDate());
    
   
    
    
    // tag animation
    $('.tag').hover(
        function() {
            $(this).animate({ marginTop: "-5px" }, 200);
        },
        function() {
            $(this).animate({ marginTop: "0px" }, 200);
        }
    );
});