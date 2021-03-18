    /*
function sayfaOlustur()
{


    //Bir HTML nesnesini oluşturma
    var baslik=document.createElement("h3");

    //Oluşturulan nesneyi body içine çocuk olarak ekleme
    document.body.appendChild(baslik);

    //Nesneye içerik atama
    baslik.innerHTML="Öğretmenleri Ekleyeceğiz!";

    //Nesneye tanımlı stillerden bir class atama
    baslik.classList.add("kirmiziBaslik");
}
*/


function ogretmenEkle()
{
    /*Öğretmen listesini yakalayıp değişkene aktardık */
    let listeOgretmenler=document.getElementById("ogretmenListe");

    /*Öğretmen listesine eklemek için yeni bir seçenek nesnesi oluşturduk */
    let secenek=document.createElement("option");

    /*Oluşturduğumuz seçeneği öğretmen listesine ekledik */
    listeOgretmenler.options.add(secenek);
    
    /*Seçeneğin text ve value kısımlarına eklemek üzere öğretmen ve branş bilgilerini aldık */
    let ogretmen=document.getElementById("txtOgretmen").value;
    let brans=document.getElementById("txtBrans").value;

    /*Aldığımız bilgileri seçeneğin text ve value kısımlarına aktardık */
    secenek.text=ogretmen;
    secenek.value=brans;

}

function sayiBul()
{
    var i;
    var sonuc=0;
    let listeBrans=document.getElementsByName("brans");

    //Radio liste içinde gezerek seçili elemanı bulup,value değerini alma
    for (i=0;i<listeBrans.length;i++)
    {
    if (listeBrans[i].checked)
        {
            var secim=listeBrans[i].value;
        }
    }
    //Select listeyi gezerek aranılan branşa uyumlu kayıt sayısını bulma
    for(i=0;i<listeOgretmenler.length;i++)
    {
        if(secim==listeOgretmenler.options[i].value)
        {
            sonuc=sonuc+1;
            
        }
    }
    //Sonucu yazdırma
    alert("Seçtiğiniz branşta kayıtlı öğretmen sayısı: "+sonuc);
}