function mevkiSay()
{
    var sonuc=0;
    var i;
    var secim;
        //Radio liste içinde gezerek seçili elemanı bulup,value değerini alma
        for(i=0;i<document.getElementsByName("kadro").length;i++)
        {
            if(document.getElementsByName("kadro")[i].checked)
            {
                secim=document.getElementsByName("kadro")[i].value;
            }
        }
        //Select listeyi gezerek aranılan branşa uyumlu kayıt sayısını bulma
        for(i=0;i<document.getElementById("liverpool").length;i++)
        {
            if(secim==document.getElementById("liverpool").options[i].value)
            {
                sonuc=sonuc+1;
            }
        }
            //Sonucu yazdırma
        alert("Seçtiğiniz mevkide oynayan futbolcu sayısı: "+sonuc);
}