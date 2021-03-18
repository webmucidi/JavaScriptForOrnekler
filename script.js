document.addEventListener("change",mevkiSay);


function mevkiSay(){

  let i;
  let fListe=document.getElementById("listeFutbolcular");
  let mListe=document.getElementsByName("futbolcu");
  let secim;
  let sonuc=0;

  for(i=0;i<mListe.length;i++)
  {
    
    if(mListe[i].checked)
    {
    secim=mListe[i].value;
    }
  }

  console.log(secim);

  for(i=0;i<fListe.length;i++)
  {
    if(secim==fListe.options[i].value)
    {
      sonuc++;
    }
  }
  alert("Seçtiğiniz mevkide oynayan futbolcu sayısı: "+sonuc);
}