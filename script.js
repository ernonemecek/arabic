// Veritabanı
const database = {
  "ARA302": [{"Türkçe": "Konuşuyor", "Arapça": "يَتَحَدَّث"}, {"Türkçe": "Dinliyor", "Arapça": "يَسْتَمِع"}, {"Türkçe": "Yardım ediyor", "Arapça": "يُسَاعِد"}, {"Türkçe": "Dolaşıyor", "Arapça": "يَتَجَوَّل"}, {"Türkçe": "Ziyaret ediyor", "Arapça": "يَزُور"}, {"Türkçe": "Oynuyor", "Arapça": "يَلْعَب"}, {"Türkçe": "Vakit geçiyor", "Arapça": "يَقْضِي (وَقْتاً)"}, {"Türkçe": "Düzenliyor", "Arapça": "يُصَحِّح"}, {"Türkçe": "Ezberliyor", "Arapça": "يَحفَظ"}, {"Türkçe": "Dönüyor", "Arapça": "يَرجِع"}, {"Türkçe": "Gidiyor", "Arapça": "يَذهَب"}, {"Türkçe": "Çıkmak", "Arapça": "خرج"}, {"Türkçe": "Girmek", "Arapça": "يدخل"}, {"Türkçe": "Veriyor", "Arapça": "يُعْطِي"}, {"Türkçe": "Almak", "Arapça": "لأخذ"}, {"Türkçe": "İzliyor", "Arapça": "يُشَاهِد\n"}, {"Türkçe": "Kafe", "Arapça": "مَقهَى"}, {"Türkçe": "Oyun", "Arapça": "لُعبَة"}, {"Türkçe": "Müşteri", "Arapça": "زبون"}, {"Türkçe": "Makale", "Arapça": "مَقَال"}, {"Türkçe": "Hikaye", "Arapça": "قِصَّة"}, {"Türkçe": "Şarkı", "Arapça": "أُغْنِيَة"}, {"Türkçe": "Nasihat", "Arapça": "نصيحة"}, {"Türkçe": "Kere", "Arapça": "مرات"}, {"Türkçe": "Sakin", "Arapça": "هَادِئ"}, {"Türkçe": "Rahat", "Arapça": "مُرِيح"}, {"Türkçe": "Bazen", "Arapça": "أحيانا"}, {"Türkçe": "Her zaman", "Arapça": "دَائِماً"}, {"Türkçe": "Nadiren", "Arapça": "نادرا"}, {"Türkçe": "Genellikle", "Arapça": "عَادةً"}, {"Türkçe": "Neredeyse", "Arapça": "تَقْرِيباً"}, {"Türkçe": "Her gün", "Arapça": "كُلَّ يَوم"}, {"Türkçe": "Her hafta", "Arapça": "كُلَّ أسبوع"}, {"Türkçe": "Her ay", "Arapça": "كُلَّ شَهْر"}, {"Türkçe": "Sadece", "Arapça": "فَقَط"}, {"Türkçe": "Yeniden", "Arapça": "مِن جَدِيد\n"}, {"Türkçe": "Birlikte", "Arapça": "مَعاً\n"}, {"Türkçe": "Cümle", "Arapça": "جُمْلَة"}, {"Türkçe": "Eğlenceli", "Arapça": "مُمْتِع"}, {"Türkçe": "Faydalı", "Arapça": "مُفِيد"}, {"Türkçe": "Sıklıkla", "Arapça": "غَالِباً"}, {"Türkçe": "Asla", "Arapça": "أَبَداً"}, {"Türkçe": "Her sene", "Arapça": "كُلَّ سَنَة"}, {"Türkçe": "Ayrıca", "Arapça": "كَذلِك"}, {"Türkçe": "Bu yüzden", "Arapça": "لِهذا السَّبَب\n"}, {"Türkçe": "Yemek yiyor", "Arapça": "يَتَنَاوَل"}, {"Türkçe": "Spor yapıyor", "Arapça": "يُمَارِس (الرياضة)"}, {"Türkçe": "Gerekiyor", "Arapça": "يَجِبُ أَن"}, {"Türkçe": "Hazırlıyor", "Arapça": "يُجَهِّز = يُحَضِّر"}, {"Türkçe": "Giyiyor", "Arapça": "يَلبَس"}, {"Türkçe": "Uyanıyor", "Arapça": "يَسْتَيْقِظ"}, {"Türkçe": "Satın alıyor", "Arapça": "يَشْتَرِي"}, {"Türkçe": "Bitiyor", "Arapça": "يَنْتَهِي"}, {"Türkçe": "Duş alıyor", "Arapça": "يَسْتَحِمّ"}, {"Türkçe": "Yıkıyor", "Arapça": "يَغْسِل"}, {"Türkçe": "Temizliyor", "Arapça": "يُنَظِّف"}, {"Türkçe": "Dinleniyor", "Arapça": "يَسْتَرِيح - اِسْتِرَاحَة"}, {"Türkçe": "Yapabiliyor", "Arapça": "يَسْتَطِيع"}, {"Türkçe": "Elbiseler", "Arapça": "مَلَابِس"}, {"Türkçe": "Randevu", "Arapça": "مَوْعِد"}, {"Türkçe": "Kulüp", "Arapça": "نَادِي"}, {"Türkçe": "Yüz", "Arapça": "وَجْه"}, {"Türkçe": "El ", "Arapça": "يَد"}, {"Türkçe": "Herkes", "Arapça": "الجَمِيع"}, {"Türkçe": "Alışveriş", "Arapça": "التَّسَوُّق"}, {"Türkçe": "Kalabalık", "Arapça": "اِزْدِحَام"}, {"Türkçe": "Aktivite", "Arapça": "نَشَاط"}, {"Türkçe": "Televizyon", "Arapça": "التِّلْفَاز"}, {"Türkçe": "Ödev", "Arapça": "واجِب"}, {"Türkçe": "Diş", "Arapça": "سِنّ"}, {"Türkçe": "Müşteri", "Arapça": "زَبُون"}, {"Türkçe": "Meslektaş", "Arapça": "زَمِيل"}, {"Türkçe": "Öğün", "Arapça": "وَجْبَة"}, {"Türkçe": "Geç", "Arapça": "مُتَأَخِّر"}, {"Türkçe": "Erken", "Arapça": "مُبَكِّر"}, {"Türkçe": "Sinirli", "Arapça": "غَاضِب"}, {"Türkçe": "Yorucu", "Arapça": "مُتعِب"}, {"Türkçe": "Harika", "Arapça": "رائِع"}, {"Türkçe": "Şimdiye kadar", "Arapça": "حتَّى الآن"}, {"Türkçe": "__'den __'ye kadar", "Arapça": "مِن ـــــ حَتَّى ـــــــ"}, {"Türkçe": "O yüzden", "Arapça": "إِذَن"}, {"Türkçe": "Peki", "Arapça": "طَيِّب"}, {"Türkçe": "Akşam", "Arapça": "مَسَاءً"}, {"Türkçe": "Sabah", "Arapça": "صَبَاحاً"}, {"Türkçe": "Hemen", "Arapça": "مُباشَرةً"}, {"Türkçe": "Biraz", "Arapça": "قَليلاً"}, {"Türkçe": "Çok", "Arapça": "كَثِيراً"}, {"Türkçe": "Kısa süre sonra / Yakında", "Arapça": "بَعدَ قَلِيل"}, {"Türkçe": "Ondan sonra", "Arapça": "بَعدَ ذلِكَ"}, {"Türkçe": "Özellikle", "Arapça": "خُصُوصاً"}, {"Türkçe": "O esnada", "Arapça": "في أَثناءِ"}, {"Türkçe": "Öğlen", "Arapça": "ظُهْراً"}, {"Türkçe": "Katılıyor", "Arapça": "يَحْضُر"}, {"Türkçe": "Yağ", "Arapça": "زَيت"}, {"Türkçe": "Sebze", "Arapça": "خُضار"}, {"Türkçe": "Baharat", "Arapça": "بَهارات"}, {"Türkçe": "Sarımsak", "Arapça": "ثُوم"}, {"Türkçe": "Tuz", "Arapça": "مِلح"}, {"Türkçe": "Nane", "Arapça": "نَعنَاع"}, {"Türkçe": "Tencere", "Arapça": "وِعاء"}, {"Türkçe": "Salatalık", "Arapça": "خِيار"}, {"Türkçe": "Marul", "Arapça": "خَسّ"}, {"Türkçe": "Sumak", "Arapça": "سُمَّاق"}, {"Türkçe": "Fırın", "Arapça": "فُرن"}, {"Türkçe": "Izgara", "Arapça": "مَشويّ"}, {"Türkçe": "Sofra", "Arapça": "مائِدة"}, {"Türkçe": "Zeytin", "Arapça": "زَيتُون"}, {"Türkçe": "Ekmek", "Arapça": "خُبز"}, {"Türkçe": "Tat", "Arapça": "طَعْم"}, {"Türkçe": "Kaşık", "Arapça": "مِلعَقَة"}, {"Türkçe": "Et", "Arapça": "لَحْم"}, {"Türkçe": "Pirinç & Pilav", "Arapça": "أَرُزّ"}, {"Türkçe": "Tavuk", "Arapça": "دَجَاج"}, {"Türkçe": "Maydanoz", "Arapça": "بَقْدُونس"}, {"Türkçe": "Salata ", "Arapça": "سَلَطَة"}, {"Türkçe": "Balık", "Arapça": "سَمَك"}, {"Türkçe": "Domates", "Arapça": "طَمَاطم"}, {"Türkçe": "Soğan", "Arapça": "بَصَل"}, {"Türkçe": "Parça", "Arapça": "قِطعة"}, {"Türkçe": "Yoğurt", "Arapça": "لَبَن"}, {"Türkçe": "Sirke", "Arapça": "خَلّ"}, {"Türkçe": "Haşlanmış", "Arapça": "مَسْلُوق"}, {"Türkçe": "Meze", "Arapça": "مُقَبِّلَات"}, {"Türkçe": "Kuruyemiş", "Arapça": "مُكَسَّرات"}, {"Türkçe": "Sağlıklı", "Arapça": "صِحِّيّ"}, {"Türkçe": "Tok", "Arapça": "شَبْعَان"}, {"Türkçe": "Aç", "Arapça": "جَائِع"}, {"Türkçe": "Kızarmış", "Arapça": "مَقْلِيّ"}, {"Türkçe": "Çeşit", "Arapça": "نَوْع"}, {"Türkçe": "Doğramak", "Arapça": "قَطَعَ"}, {"Türkçe": "Hazırlamak", "Arapça": "حَضَّرَ"}, {"Türkçe": "Yıkamak", "Arapça": "غَسَلَ"}, {"Türkçe": "Patlıcan", "Arapça": "بَاذِنْجَان"}, {"Türkçe": "Koymak", "Arapça": "وَضَعَ"}, {"Türkçe": "Pişirmek", "Arapça": "طَبَخَ"}, {"Türkçe": "Servis etmek", "Arapça": "قَدَّمَ"}, {"Türkçe": "Eklemek", "Arapça": "أضافَ"}, {"Türkçe": "Pişmek", "Arapça": "نَضَجَ"}, {"Türkçe": "Ana yemek", "Arapça": "الطَّبَق الرَّئِيسِيّ"}, {"Türkçe": "Öncelikle ", "Arapça": "أَوَّلاً"}, {"Türkçe": "Menü", "Arapça": "قَائمة الطَّعَام"}, {"Türkçe": "Fıstık", "Arapça": "فُسْتُق"}, {"Türkçe": "Ateş üzerinde", "Arapça": "على النَّارِ"}, {"Türkçe": "Kültür", "Arapça": "ثَقَافَة"}, {"Türkçe": "Kolay gelsin", "Arapça": "يعطيك العافية"}, {"Türkçe": "Lütfen", "Arapça": "لو سَمَحْت"}, {"Türkçe": "İsminiz nedir?", "Arapça": "الاسْمُ الكَرِيم؟"}, {"Türkçe": "Efendi", "Arapça": "أُسْتَاذ"}, {"Türkçe": "Siz", "Arapça": "حَضْرَتك"}, {"Türkçe": "Sipariş vermek", "Arapça": "طَلَبَ"}, {"Türkçe": "Zannetmek", "Arapça": "ظَنَّ"}, {"Türkçe": "Önce ", "Arapça": "قَبْلَ"}, {"Türkçe": "Sonra", "Arapça": "بَعدَ"}, {"Türkçe": "Hazır yemek", "Arapça": "وَجَبَات سَرِيعة"}, {"Türkçe": "Olmadan", "Arapça": "بِدُونِ"}, {"Türkçe": "Rezervasyon", "Arapça": "حَجْز"}, {"Türkçe": "Hesap", "Arapça": "حِسَاب"}, {"Türkçe": "Hafif", "Arapça": "خَفِيف"}, {"Türkçe": "Taze", "Arapça": "طَازَج"}, {"Türkçe": "Zararlı", "Arapça": "مُضِرّ"}, {"Türkçe": "Tahin", "Arapça": "طَحِينة"}, {"Türkçe": "Sos", "Arapça": "صَلْصة"}, {"Türkçe": "Acı", "Arapça": "حارّ"}, {"Türkçe": "Turşu", "Arapça": "مُخَلَّل"}, {"Türkçe": "Mantar", "Arapça": "فُطْر"}, {"Türkçe": "Hurma", "Arapça": "تَمْر"}, {"Türkçe": "Amade", "Arapça": "حاضر"}, {"Türkçe": "Mangal yapmak", "Arapça": "شَوى"}, {"Türkçe": "Mutfak", "Arapça": "المَطْبَخ"}, {"Türkçe": "Komşu", "Arapça": "جار"}, {"Türkçe": "Eşyalı", "Arapça": "مَفْروش"}, {"Türkçe": "-a/-e bakıyor", "Arapça": "مُطِلَّة على"}, {"Türkçe": "Manzara", "Arapça": "مَنظَر"}, {"Türkçe": "Dolap", "Arapça": "خِزانة"}, {"Türkçe": "Mahalle", "Arapça": "حَيّ"}, {"Türkçe": "Buzdolabı", "Arapça": "ثَلّاجة"}, {"Türkçe": "Pencere", "Arapça": "نافِذَة"}, {"Türkçe": "Daire", "Arapça": "شَقّة"}, {"Türkçe": "Huzur", "Arapça": "الرّاحة النَّفْسِية"}, {"Türkçe": "Perde", "Arapça": "سِتارة"}, {"Türkçe": "Renkli", "Arapça": "مُلَوَّنة"}, {"Türkçe": "Yalnız", "Arapça": "وَحْدي"}, {"Türkçe": "Kira", "Arapça": "إِيجَار"}, {"Türkçe": "Kanepe", "Arapça": "أريكة"}, {"Türkçe": "Çatı", "Arapça": "السَّطْح"}, {"Türkçe": "Halı", "Arapça": "سَجّادة"}, {"Türkçe": "Duvar", "Arapça": "جِدار"}, {"Türkçe": "Banyo", "Arapça": "حمَّام"}, {"Türkçe": "Misafir odası", "Arapça": "غُرفة الضُّيوف"}, {"Türkçe": "Çocukluk", "Arapça": "طُفولة"}, {"Türkçe": "Yatak", "Arapça": "سَرير"}, {"Türkçe": "Güneşli", "Arapça": "مُشْمِس"}, {"Türkçe": "Zemin kat", "Arapça": "الطّابق الأرضِيِّ"}, {"Türkçe": "Balkon", "Arapça": "شُرْفة"}, {"Türkçe": "Oda", "Arapça": "غُرْفَة"}, {"Türkçe": "Lamba", "Arapça": "مِصْباح"}, {"Türkçe": "Yatak odası", "Arapça": "غُرْفة النَّوْم"}, {"Türkçe": "Günlükler", "Arapça": "مُذَكَّرات"}, {"Türkçe": "Asansör", "Arapça": "مِصْعَد"}, {"Türkçe": "Oturma odası", "Arapça": "غُرْفة المَعيشة /الجُلوس"}, {"Türkçe": "Resim", "Arapça": "لَوْحةٌ"}, {"Türkçe": "Yüksek", "Arapça": "مُرْتَفِع"}, {"Türkçe": "Alçak", "Arapça": "مُنْخَفِض"}, {"Türkçe": "Merdiven", "Arapça": "دَرَج"}, {"Türkçe": "Kötü", "Arapça": "سَيِّئ"}, {"Türkçe": "Dar", "Arapça": "ضيّق"}, {"Türkçe": "Geniş", "Arapça": "واسع"}, {"Türkçe": "Rahatsız edici", "Arapça": "مُزْعِج"}, {"Türkçe": "Altında", "Arapça": "تَحْت"}, {"Türkçe": "Üstünde", "Arapça": "فَوْق"}, {"Türkçe": "Satıcı", "Arapça": "بَيْع"}, {"Türkçe": "Alıcı", "Arapça": "شِرَاء"}, {"Türkçe": "-e/-a doğru gitmek", "Arapça": "اتَّجِهْ"}, {"Türkçe": "Müze", "Arapça": "مَتْحَف"}, {"Türkçe": "Memnuniyetle", "Arapça": "بِكُلِّ سُرور"}, {"Türkçe": "Pardon", "Arapça": "عَفواً"}, {"Türkçe": "-a/-e dönmek", "Arapça": "اِنعطِفْ"}, {"Türkçe": "Sokağı geçmek", "Arapça": "اِقْطعي الشارع"}, {"Türkçe": "Yürümek", "Arapça": "اِمْشِ"}, {"Türkçe": "Aramak (Telefonla)", "Arapça": "اِتَّصِلْ"}, {"Türkçe": "Durmak", "Arapça": "وَقَف"}, {"Türkçe": "Ulaşmak", "Arapça": "وَصَل"}, {"Türkçe": "Bulmak", "Arapça": "وَجَد"}, {"Türkçe": "Uzaklıkta", "Arapça": "على بُعْدِ"}, {"Türkçe": "Dümdüz", "Arapça": "بِشَكْلٍ مُسْتَقِيم"}, {"Türkçe": "Sağ ", "Arapça": "يَمِين"}, {"Türkçe": "Sol", "Arapça": "يَسَار"}, {"Türkçe": "Önünde", "Arapça": "أَمَامَ"}, {"Türkçe": "Karşısında", "Arapça": "مُقابِلَ"}, {"Türkçe": "Arkasında", "Arapça": "خَلْف"}, {"Türkçe": "Yakın", "Arapça": "قَرِيب"}, {"Türkçe": "Uzak ", "Arapça": "بَعِيد"}, {"Türkçe": "Binmek", "Arapça": "اِرْكَب"}, {"Türkçe": "İnmek", "Arapça": "اِنْزِل"}, {"Türkçe": "Otopark", "Arapça": "مَوْقِف سَّيَّارَات"}, {"Türkçe": "Cadde", "Arapça": "شَارِع"}, {"Türkçe": "İstasyon", "Arapça": "مَحَطَّة"}, {"Türkçe": "Otel", "Arapça": "فُندُق"}, {"Türkçe": "Dükkan", "Arapça": "مَحَلَّات تِجَارِيَّة"}, {"Türkçe": "Bitmek", "Arapça": "اِنْتَهى"}, {"Türkçe": "Adres", "Arapça": "عُنْوَان"}, {"Türkçe": "Ana cadde", "Arapça": "شارع رئيسيّ"}, {"Türkçe": "Trafik ışığı", "Arapça": "إشارة ضَوئِيّة"}, {"Türkçe": "Ara sokak", "Arapça": "شَارع فَرْعِيّ"}, {"Türkçe": "Maalesef", "Arapça": "مَعَ الأسف"}, {"Türkçe": "Kesinlikle", "Arapça": "بِالتَّأْكِيد"}, {"Türkçe": "Tam olarak", "Arapça": "بِالتَّحْدِيدِ"}, {"Türkçe": "Yapabilmek", "Arapça": "يُمْكِن"}, {"Türkçe": "Yanında", "Arapça": "بِجانِبِ"}, {"Türkçe": "Son ", "Arapça": "نِهَاية"}, {"Türkçe": "Başlangıç", "Arapça": "بِدَاية"}, {"Türkçe": "Beklemek", "Arapça": "اِنْتَظَر"}, {"Türkçe": "Söylemek", "Arapça": "أَخْبَر"}, {"Türkçe": "Orta", "Arapça": "وَسَط"}, {"Türkçe": "Yönünde", "Arapça": "باتِّجَاه"}],
  "ARA303": [
  {
    "Türkçe": "لَحظة، لَحظات",
    "Arapça": "An"
  },
  {
    "Türkçe": "سَهْل",
    "Arapça": "Kolay"
  },
  {
    "Türkçe": "صَعْب",
    "Arapça": "Zor"
  },
  {
    "Türkçe": "عَدَد، أعداد",
    "Arapça": "Sayı, Adet"
  },
  {
    "Türkçe": "مُزْدَحِم",
    "Arapça": "Kalabalık"
  },
  {
    "Türkçe": "وَدَّع، يُوَدِّع، وَدَاع",
    "Arapça": "Veda etmek"
  },
  {
    "Türkçe": "دَرَجة، دَرَجات",
    "Arapça": "Derece"
  },
  {
    "Türkçe": "بَسيط",
    "Arapça": "Basit"
  },
  {
    "Türkçe": "اِنطَلَق، يَنطَلِق، اِنطِلاق",
    "Arapça": "Yola çıkmak"
  },
  {
    "Türkçe": "الخارِج",
    "Arapça": "Dışarı"
  },
  {
    "Türkçe": "جَدِيد >> جُدُد",
    "Arapça": "Yeni"
  },
  {
    "Türkçe": "سَارَ، يَسِير، سَيْر",
    "Arapça": "Yürümek"
  },
  {
    "Türkçe": "قَرْيَة، قُرَى",
    "Arapça": "Köy"
  },
  {
    "Türkçe": "بَقِيَ، يَبْقى، بَقاء",
    "Arapça": "Kalmak"
  },
  {
    "Türkçe": "حَجَر، أَحْجار",
    "Arapça": "Taş"
  },
  {
    "Türkçe": "أَنزَلَ، يُنزِلُ، إِنْزال",
    "Arapça": "İndirmek"
  },
  {
    "Türkçe": "عَجُوز، عَجَائِز",
    "Arapça": "Yaşlı"
  },
  {
    "Türkçe": "حَمَلَ، يحمِل، حَمْل",
    "Arapça": "Hamal, İşçi"
  },
  {
    "Türkçe": "حَقْل، حُقول",
    "Arapça": "Bahçe"
  },
  {
    "Türkçe": "عَادَ، يَعُود، عَوْدَة",
    "Arapça": "Geri dönmek"
  },
  {
    "Türkçe": "سُور، أَسْوار",
    "Arapça": "Sur, Çit"
  },
  {
    "Türkçe": "إلى هذه الدّرجة...",
    "Arapça": "Bu kadar"
  },
  {
    "Türkçe": "صَعِد، يصعَد، صُعود",
    "Arapça": "Çıkmak"
  },
  {
    "Türkçe": "جَرَس، أجْراس",
    "Arapça": "Zil"
  },
  {
    "Türkçe": "كَالعادة",
    "Arapça": "Her zaman olduğu gibi"
  },
  {
    "Türkçe": "مِقعَد، مَقاعِد",
    "Arapça": "Koltuk"
  },
  {
    "Türkçe": "أوّل + (اسم) + لي",
    "Arapça": "Benim ilk..."
  },
  {
    "Türkçe": "خَافَ، يَخَاف، خَوْف + مِن",
    "Arapça": "Korkmak"
  },
  {
    "Türkçe": "مُنْتَصَف",
    "Arapça": "Orta, Yarı"
  },
  {
    "Türkçe": "دُونَ فائدة",
    "Arapça": "Faydasız"
  },
  {
    "Türkçe": "قال، يقول + لِـ",
    "Arapça": "a söylemek"
  },
  {
    "Türkçe": "تَجَوّل، يتَجَوَّل، تَجَوُّل",
    "Arapça": "Gezmek"
  },
  {
    "Türkçe": "فِكْرة",
    "Arapça": "Fikir"
  },
  {
    "Türkçe": "حَصَل، يحصُل",
    "Arapça": "Olmak"
  },
  {
    "Türkçe": "تعرّف ، يتعرّف + على",
    "Arapça": "Tanışmak"
  },
  {
    "Türkçe": "نزل ، ينزل، نُزول",
    "Arapça": "İnmek"
  },
  {
    "Türkçe": "فارغ",
    "Arapça": "Boş"
  },
  {
    "Türkçe": "تَذَكَّر،يتذَكَّر، تَذَكّرُ",
    "Arapça": "Hatırlamak"
  },
  {
    "Türkçe": "أَحَد ، إِحْدَى + اسم",
    "Arapça": "...-den biri"
  },
  {
    "Türkçe": "رَتَّب، يُرَتِّب، تَرتِيب",
    "Arapça": "Toparlanmak"
  },
  {
    "Türkçe": "رأى ، يرى، رؤية",
    "Arapça": "Görmek"
  },
  {
    "Türkçe": "مُزعِج",
    "Arapça": "Rahatsız edici"
  },
  {
    "Türkçe": "غَيَّرَ، يُغَيِّر، تَغْيِير",
    "Arapça": "Değiştirmek"
  },
  {
    "Türkçe": "تَمَنّى، يَتَمَنّىَ",
    "Arapça": "Dilemek"
  },
  {
    "Türkçe": "بَدا، يبدو",
    "Arapça": "Görünmel"
  },
  {
    "Türkçe": "اشترى، يشتري، شِراء",
    "Arapça": "Satın almak"
  },
  {
    "Türkçe": "أصبَح، يُصبِح",
    "Arapça": "Olmak"
  },
  {
    "Türkçe": "تَعَوَّد ، يَتَعَوّد + عَلَى",
    "Arapça": "a alışmak"
  },
  {
    "Türkçe": "كما تَرَى",
    "Arapça": "Gördüğün gibi"
  },
  {
    "Türkçe": "كما قُلتُ",
    "Arapça": "Dediğin gibi"
  },
  {
    "Türkçe": "عندما فتحت عيني = عندما استيقظت",
    "Arapça": "Gözlerimi açtığımda - uyandığımda"
  },
  {
    "Türkçe": "أيّ شَيْء",
    "Arapça": "Herhangi bir şey"
  },
  {
    "Türkçe": "تصبِح على خير / ليلة سعيدة",
    "Arapça": "İyi geceler"
  },
  {
    "Türkçe": "مع الوقت",
    "Arapça": "Zamanla"
  },
  {
    "Türkçe": "لا تقلق",
    "Arapça": "Merak etme"
  },
  {
    "Türkçe": "أتمنى أن يكون + جملة اسمية",
    "Arapça": "Umarım ... olur"
  },
  {
    "Türkçe": "مَلِيْء",
    "Arapça": "Dolu"
  },
  {
    "Türkçe": "مُعْتَدِل",
    "Arapça": "Ilık"
  },
  {
    "Türkçe": "عَمَل يَدَوِيّ >> أَعْمَال يَدَوِيَّة",
    "Arapça": "El sanatı"
  },
  {
    "Türkçe": "أَثَر / آثَار",
    "Arapça": "Eser"
  },
  {
    "Türkçe": "أَثَرِيّ",
    "Arapça": "Tarihi, antik"
  },
  {
    "Türkçe": "نادِر",
    "Arapça": "Az bulunan, nadir"
  },
  {
    "Türkçe": "قَضَى، يَقْضي وقتاً",
    "Arapça": "Vakit geçmek"
  },
  {
    "Türkçe": "اِستَمْتَع، يسْتَمْتِع",
    "Arapça": "Eğlenmek"
  },
  {
    "Türkçe": "ينصَح + أن",
    "Arapça": "Tavsiye etmek"
  },
  {
    "Türkçe": "نَشاط / نَشاطات",
    "Arapça": "Aktivite, faaliyet"
  },
  {
    "Türkçe": "خَلِيج",
    "Arapça": "Körfez"
  },
  {
    "Türkçe": "غابة/غابات",
    "Arapça": "Orman"
  },
  {
    "Türkçe": "بالإضافة إلى",
    "Arapça": "Ek olarak; ayrıca"
  },
  {
    "Türkçe": "جَبَل/جِبَال",
    "Arapça": "Dağ"
  },
  {
    "Türkçe": "مَتْحَف / مَتاحِف",
    "Arapça": "Müze"
  },
  {
    "Türkçe": "هَرَم / أهْرامات",
    "Arapça": "Piramit"
  },
  {
    "Türkçe": "قَلْعة",
    "Arapça": "Kale"
  },
  {
    "Türkçe": "الطَّبِيعَة",
    "Arapça": "Doğa"
  },
  {
    "Türkçe": "الدُّنْيا",
    "Arapça": "Dünya"
  },
  {
    "Türkçe": "مَنْظَر / مَناظِر",
    "Arapça": "Manzara"
  },
  {
    "Türkçe": "حَوْل",
    "Arapça": "Etrafında; çevresinde"
  },
  {
    "Türkçe": "إكرام الضيف",
    "Arapça": "Misafirperverlik"
  },
  {
    "Türkçe": "شاطئ / شواطئ",
    "Arapça": "Sahil"
  },
  {
    "Türkçe": "رَمْل >> رَمْلِيّ",
    "Arapça": "Kum"
  },
  {
    "Türkçe": "ناعم",
    "Arapça": "Yumuşak"
  },
  {
    "Türkçe": "نقيّ",
    "Arapça": "Temiz"
  },
  {
    "Türkçe": "راحة البال",
    "Arapça": "İç huzur"
  },
  {
    "Türkçe": "دَافِئ",
    "Arapça": "ıIık"
  },
  {
    "Türkçe": "هدية/هدايا",
    "Arapça": "Hediye"
  },
  {
    "Türkçe": "خصوصاً",
    "Arapça": "Özellikle"
  },
  {
    "Türkçe": "خَفِيف الظِّلّ (خِفَّة الظِّلّ) ≠ ثَقِيل الظِّلّ",
    "Arapça": "Hafif yürekli"
  },
  {
    "Türkçe": "ثقافة",
    "Arapça": "Kültür"
  },
  {
    "Türkçe": "شَعْبِيّ",
    "Arapça": "Geleneksel"
  },
  {
    "Türkçe": "تَقْلِيدِيّ",
    "Arapça": "Geleneksel"
  },
  {
    "Türkçe": "مُمَيَّز",
    "Arapça": "Özel"
  },
  {
    "Türkçe": "عَرْض / عُرُوض",
    "Arapça": "Şov; gösteri"
  },
  {
    "Türkçe": "أصيل",
    "Arapça": "Orijinal; hakiki; asil"
  },
  {
    "Türkçe": "زائر / زوار",
    "Arapça": "Ziyaretçi"
  },
  {
    "Türkçe": "مَجَّانِيّ",
    "Arapça": "Ücretsiz; bedava"
  },
  {
    "Türkçe": "يُطِلُّ على (مُطِلٌّ عَلَى)",
    "Arapça": "a bakıyor"
  },
  {
    "Türkçe": "ماء / مياه",
    "Arapça": "Su"
  },
  {
    "Türkçe": "التوفيق",
    "Arapça": "Muvaffakiyet; tevfik"
  },
  {
    "Türkçe": "قام بـ",
    "Arapça": "Yaptı"
  },
  {
    "Türkçe": "شَعَر",
    "Arapça": "Hissetti"
  },
  {
    "Türkçe": "عندما",
    "Arapça": "-dığı zaman, -dığında"
  },
  {
    "Türkçe": "حضارة",
    "Arapça": "Medeniyet"
  },
  {
    "Türkçe": "لَيْلَة / لَيَالِي",
    "Arapça": "Gece"
  },
  {
    "Türkçe": "قرَّرَ، يُقَرِّرُ، قَرَار",
    "Arapça": "Karar vermek"
  },
  {
    "Türkçe": "أَكْرَمَ، يُكرِمُ، إِكْرَام",
    "Arapça": "İkram etmek"
  },
  {
    "Türkçe": "تذكار / تذكارات",
    "Arapça": "Hatıra"
  },
  {
    "Türkçe": "ضَباب",
    "Arapça": "Sis"
  },
  {
    "Türkçe": "مَاطِر",
    "Arapça": "Yağmurlu"
  },
  {
    "Türkçe": "مُنْخَفِض",
    "Arapça": "Düşük"
  },
  {
    "Türkçe": "جافّ",
    "Arapça": "Kuru"
  },
  {
    "Türkçe": "دَرَجَة الحرارة",
    "Arapça": "Sıcaklık, hava sıcaklığı"
  },
  {
    "Türkçe": "سَاْحِل",
    "Arapça": "Sahil"
  },
  {
    "Türkçe": "مُرْتَفِع",
    "Arapça": "Yüksek"
  },
  {
    "Türkçe": "وَصَلَ، يَصِلُ + إلى",
    "Arapça": "a ulaştı, a ulaşıyor"
  },
  {
    "Türkçe": "مُعْتَدِل",
    "Arapça": "Ilımlı"
  },
  {
    "Türkçe": "غَائِم",
    "Arapça": "Bulutlu"
  },
  {
    "Türkçe": "مُشْمِس",
    "Arapça": "Güneşli"
  },
  {
    "Türkçe": "طَقْس = جَوّ",
    "Arapça": "Hava, hava durumu"
  },
  {
    "Türkçe": "ثَلْج >> ثُلُوج",
    "Arapça": "Kar"
  },
  {
    "Türkçe": "رِيح / رِيَاح",
    "Arapça": "Rüzgâr"
  },
  {
    "Türkçe": "مَطَر / أَمْطار",
    "Arapça": "Yağmur"
  },
  {
    "Türkçe": "رُطُوبَة (الصفة: رَطْب)",
    "Arapça": "Nem"
  },
  {
    "Türkçe": "نَهَار",
    "Arapça": "Gün, gündüz"
  },
  {
    "Türkçe": "اِخْتاْرَ، يَخْتَاْر، اِخْتِيَار",
    "Arapça": "Seçmek"
  },
  {
    "Türkçe": "مُتَقَلِّب",
    "Arapça": "Değişken"
  },
  {
    "Türkçe": "عُموماً",
    "Arapça": "Genellikle, genel olarak"
  },
  {
    "Türkçe": "أَحْضَرَ - يُحْضِرُ",
    "Arapça": "Getirmek"
  },
  {
    "Türkçe": "أَصْبَحَ، يُصْبِحُ",
    "Arapça": "Olmak"
  },
  {
    "Türkçe": "السِّيَاحَة",
    "Arapça": "Turizm"
  },
  {
    "Türkçe": "خِلالَ",
    "Arapça": "Sırasında"
  },
  {
    "Türkçe": "غَيْم/غُيُوم",
    "Arapça": "Bulutlar"
  },
  {
    "Türkçe": "جُزْئِيّ",
    "Arapça": "Parçalı"
  },
  {
    "Türkçe": "كُلِّيّ",
    "Arapça": "Tam"
  },
  {
    "Türkçe": "اِنْخَفَضَ، يَنْخَفِضُ، اِنْخِفَاض",
    "Arapça": "Düşmek"
  },
  {
    "Türkçe": "غَرْب",
    "Arapça": "Batı"
  },
  {
    "Türkçe": "شَرْق",
    "Arapça": "Doğu"
  },
  {
    "Türkçe": "جَنُوب",
    "Arapça": "Güney"
  },
  {
    "Türkçe": "شَمَال",
    "Arapça": "Kuzey"
  },
  {
    "Türkçe": "اِرْتَفَعَ، يَرْتَفِعُ، اِرْتِفَاع",
    "Arapça": "Yükselmek"
  },
  {
    "Türkçe": "خَفِيف",
    "Arapça": "Hafif"
  },
  {
    "Türkçe": "مِظَلَّة",
    "Arapça": "Şemsiye"
  },
  {
    "Türkçe": "أَحْياناً",
    "Arapça": "Bazen"
  },
  {
    "Türkçe": "غَالِباً",
    "Arapça": "Sıklıkla"
  },
  {
    "Türkçe": "اِنْتَشَرَ، يَنْتَشِرُ، اِنْتِشَار",
    "Arapça": "Yaymak"
  },
  {
    "Türkçe": "قَوِيّ = شَدِيد",
    "Arapça": "Güçlü"
  },
  {
    "Türkçe": "مُثْلِج",
    "Arapça": "Karlı"
  },
  {
    "Türkçe": "لَيْل",
    "Arapça": "Gece"
  },
  {
    "Türkçe": "دَافِئ",
    "Arapça": "Ilık"
  },
  {
    "Türkçe": "ثَقِيل",
    "Arapça": "Ağır"
  },
  {
    "Türkçe": "مَعَ الأَسَف = لِلْأَسَف",
    "Arapça": "Maalesef/ne yazık ki"
  },
  {
    "Türkçe": "منذ",
    "Arapça": "O zamandan beri; önce"
  },
  {
    "Türkçe": "بضع / ـة",
    "Arapça": "Bazı"
  },
  {
    "Türkçe": "ضخم",
    "Arapça": "Kocaman"
  },
  {
    "Türkçe": "بالنسبة لـِ",
    "Arapça": "İlgilendirdiği kadarı ile"
  },
  {
    "Türkçe": "مول / مولات",
    "Arapça": "Alışveriş merkezi"
  },
  {
    "Türkçe": "متفرق",
    "Arapça": "Ayrılmış"
  },
  {
    "Türkçe": "لَزِمَ، يَلْزَم، لُزُوم",
    "Arapça": "Gerekli olmak"
  },
  {
    "Türkçe": "أَدَاة / أَدَوَات",
    "Arapça": "Alet/enstrüman"
  },
  {
    "Türkçe": "كَهْرَباء",
    "Arapça": "Elektrik"
  },
  {
    "Türkçe": "دَعَا - يَدْعُو - دَعْوَة إلى",
    "Arapça": "Davet etmek"
  },
  {
    "Türkçe": "مَوْسِم / مَوَاسِم",
    "Arapça": "Mevsim"
  },
  {
    "Türkçe": "الرِّضَى",
    "Arapça": "Memnuniyet"
  },
  {
    "Türkçe": "حَدِيث",
    "Arapça": "Modern"
  },
  {
    "Türkçe": "وَفَّرَ، يُوَفِّرُ، تَوْفِير",
    "Arapça": "Para biriktirmek; tasarruf yapmak"
  },
  {
    "Türkçe": "راقٍ (راقِي)",
    "Arapça": "Zarif"
  },
  {
    "Türkçe": "طِرَاز",
    "Arapça": "Tarz; stil"
  },
  {
    "Türkçe": "خَيَالِيّ",
    "Arapça": "Hayali"
  },
  {
    "Türkçe": "نِظَام",
    "Arapça": "Sistem; düzen"
  },
  {
    "Türkçe": "مَهَارَة",
    "Arapça": "Maharet, yetenek"
  },
  {
    "Türkçe": "سِعْر / أَسْعَار",
    "Arapça": "Fiyat"
  },
  {
    "Türkçe": "نَجَّار",
    "Arapça": "Marangoz"
  },
  {
    "Türkçe": "حَدَّاد",
    "Arapça": "Demirci"
  },
  {
    "Türkçe": "عَلاقة، عَلاقَات",
    "Arapça": "İlişki; alaka"
  },
  {
    "Türkçe": "بَيْنَما",
    "Arapça": "Sırasında; halbuki"
  },
  {
    "Türkçe": "رَغْمَ",
    "Arapça": "a rağmen"
  },
  {
    "Türkçe": "مِسَاحَة",
    "Arapça": "Alan"
  },
  {
    "Türkçe": "ملَّ، يَمَلُّ، مَلَل + مِن",
    "Arapça": "dan sıkılmak"
  },
  {
    "Türkçe": "مُمِلّ",
    "Arapça": "Sıkıcı"
  },
  {
    "Türkçe": "حَسَبَ",
    "Arapça": "a göre"
  },
  {
    "Türkçe": "جَوْهَرَة >> جَوَاهِر / مُجَوْهَرَة >> مُجَوْهَرَات",
    "Arapça": "Mücevher"
  },
  {
    "Türkçe": "مُنَاقَشَة",
    "Arapça": "Tartışma"
  },
  {
    "Türkçe": "بَلْ",
    "Arapça": "Daha doğrusu; doğrusu; aksine"
  },
  {
    "Türkçe": "بِالْعَكْس",
    "Arapça": "Aksine; bilâkis"
  },
  {
    "Türkçe": "شَجَّعَ، يُشَجِّعُ، تَشْجِيع + على",
    "Arapça": "Teşvik etmek"
  },
  {
    "Türkçe": "بِدُونِ، دُونَ، بِلَا",
    "Arapça": "sız; -siz; olmadan"
  },
  {
    "Türkçe": "رَائِحَة >> رَوَائِح",
    "Arapça": "Koku"
  },
  {
    "Türkçe": "سَكِينَة",
    "Arapça": "Sekine; huzur"
  },
  {
    "Türkçe": "عَطَّار >> عَطَّارُون",
    "Arapça": "Aktar"
  },
  {
    "Türkçe": "حَلَّ، يَحُلُّ، حَلّ",
    "Arapça": "Halletmek; çözmek"
  },
  {
    "Türkçe": "غَيْر + صفة",
    "Arapça": "Gayri...; -sız; -siz"
  },
  {
    "Türkçe": "حَقِيقِيّ",
    "Arapça": "Gerçek"
  },
  {
    "Türkçe": "مُجْتَمِع",
    "Arapça": "Toplanmış"
  },
  {
    "Türkçe": "مُمْتِع",
    "Arapça": "Eğlenceli"
  },
  {
    "Türkçe": "أَشْبَهَ، يُشْبِهُ، شَبَه + مفعول به",
    "Arapça": "Benzemek"
  },
  {
    "Türkçe": "مَرَّة >> مَرَّات",
    "Arapça": "Sefer; kere; defa"
  },
  {
    "Türkçe": "قَمِيص / قُمْصَان",
    "Arapça": "Gömlek"
  },
  {
    "Türkçe": "كُمّ >> أَكْمَام",
    "Arapça": "Kol"
  },
  {
    "Türkçe": "مُلَوَّن",
    "Arapça": "Renkli"
  },
  {
    "Türkçe": "دَفَعَ، يَدْفَع، دَفْع",
    "Arapça": "Ödemek"
  },
  {
    "Türkçe": "شَرَّف",
    "Arapça": "Teşrif etmek; onurlandırmak"
  },
  {
    "Türkçe": "بَدلَة",
    "Arapça": "Takım elbise"
  },
  {
    "Türkçe": "تَنُّورة",
    "Arapça": "Etek"
  },
  {
    "Türkçe": "عُلْبَة",
    "Arapça": "Kutu"
  },
  {
    "Türkçe": "ثَمَن",
    "Arapça": "Fiyat"
  },
  {
    "Türkçe": "قُبَّعة",
    "Arapça": "Şapka"
  },
  {
    "Türkçe": "كَنزَة",
    "Arapça": "Kazak"
  },
  {
    "Türkçe": "قُفَّازات",
    "Arapça": "Eldiven"
  },
  {
    "Türkçe": "غُرفة القِياس",
    "Arapça": "Deneme odası"
  },
  {
    "Türkçe": "مَقَاس / قِيَاس",
    "Arapça": "Beden"
  },
  {
    "Türkçe": "شال",
    "Arapça": "Şal"
  },
  {
    "Türkçe": "أَعْجَبَ، يُعجِبُ، إِعْجَاب",
    "Arapça": "Hoşa gitmek; beğenmek"
  },
  {
    "Türkçe": "بَنَفْسَجِيّ",
    "Arapça": "Mor"
  },
  {
    "Türkçe": "ثَوْب، أَثْوَاب / فُسْتَان، فَسَاتِين",
    "Arapça": "Elbise"
  },
  {
    "Türkçe": "رَمَادِيّ",
    "Arapça": "Gri"
  },
  {
    "Türkçe": "مِعْطَف / مَعَاطِف",
    "Arapça": "Ceket; kaban"
  },
  {
    "Türkçe": "غَالِي",
    "Arapça": "Pahalı"
  },
  {
    "Türkçe": "رَخِيص",
    "Arapça": "Ucuz"
  },
  {
    "Türkçe": "خَصْم",
    "Arapça": "İndirim"
  },
  {
    "Türkçe": "بُنِّيّ",
    "Arapça": "Kahverengi"
  },
  {
    "Türkçe": "بَاعَ، يَبِيع، بَيْع",
    "Arapça": "Satmak"
  },
  {
    "Türkçe": "اِشْتَرى، يَشْتَرِي، شِرَاء",
    "Arapça": "Satın almak"
  },
  {
    "Türkçe": "لا بَأْسَ بِه/بِهَا",
    "Arapça": "Fena değil"
  },
  {
    "Türkçe": "عَبَاءَة",
    "Arapça": "Pelerin"
  },
  {
    "Türkçe": "حِذَاء / أَحْذِيَة",
    "Arapça": "Ayakkabı"
  },
  {
    "Türkçe": "فاتِح",
    "Arapça": "Açık"
  },
  {
    "Türkçe": "غَامِق",
    "Arapça": "Koyu"
  },
  {
    "Türkçe": "وَرْدِيّ = زَهْرِيّ",
    "Arapça": "Pembe"
  },
  {
    "Türkçe": "يَتَنَاسَب مَع",
    "Arapça": "ile iyi gider; -a uygun"
  },
  {
    "Türkçe": "رَبْطَة عُنُق",
    "Arapça": "Kravat"
  },
  {
    "Türkçe": "بِنطَال = بَنْطَلُون",
    "Arapça": "Pantolon"
  },
  {
    "Türkçe": "جَوْرَب / جَوَارِب",
    "Arapça": "Çorap"
  },
  {
    "Türkçe": "برتقاليّ",
    "Arapça": "Turuncu"
  },
  {
    "Türkçe": "سَمَاوِيّ",
    "Arapça": "Gökyüzü mavi"
  },
  {
    "Türkçe": "مَحَلّ / مَحَلَّات",
    "Arapça": "Mağaza"
  },
  {
    "Türkçe": "دُكَّان / دَكَاكِين",
    "Arapça": "Dükkan"
  },
  {
    "Türkçe": "لَوْن >> أَلْوَان",
    "Arapça": "Renk"
  },
  {
    "Türkçe": "جَرَّبَ، يُجَرِّبُ، تَجْرِبَة",
    "Arapça": "Denemek"
  }
],
  "ARA304": [
  {
    "Türkçe": "حَدَثَ، يَحْدُثُ، حُدُوث",
    "Arapça": "Olmak (bir olay)"
  },
  {
    "Türkçe": "سَقَطـ، يَسْقُط، سُقُوط",
    "Arapça": "Düşmek"
  },
  {
    "Türkçe": "صَرَخ، يَصْرُخ، صُرَاخ",
    "Arapça": "Bağırmak"
  },
  {
    "Türkçe": "حلَّ، يَحُلُّ، حَلّ",
    "Arapça": "Halletmek"
  },
  {
    "Türkçe": "أَتَى، يَأْتِي، إِتْيَان",
    "Arapça": "Gelmek"
  },
  {
    "Türkçe": "ظَنَّ، يَظُنّ، ظَنّ + أنّ",
    "Arapça": "Sanmak; zannetmek"
  },
  {
    "Türkçe": "اِلْتَهَب، يَلْتَهِب، اِلْتِهَاب",
    "Arapça": "İltihaplı olmak"
  },
  {
    "Türkçe": "كَسَرَ، يَكْسِر، كَسْر",
    "Arapça": "Kırmak"
  },
  {
    "Türkçe": "ضِرْس، أَضْرَاس",
    "Arapça": "Azı dişi"
  },
  {
    "Türkçe": "رِجْل",
    "Arapça": "Bacak"
  },
  {
    "Türkçe": "بَطْن",
    "Arapça": "Karın"
  },
  {
    "Türkçe": "حَلْق",
    "Arapça": "Boğaz"
  },
  {
    "Türkçe": "سِنّ، أَسْنَان",
    "Arapça": "Diş"
  },
  {
    "Türkçe": "ظَهْر",
    "Arapça": "Sırt"
  },
  {
    "Türkçe": "جُرْح، جُرُوح",
    "Arapça": "Yara"
  },
  {
    "Türkçe": "ضَمَّد، يُضَمِّد، تَضْمِيد",
    "Arapça": "Yaraları sarmak"
  },
  {
    "Türkçe": "لَا فَائِدَة + مِن",
    "Arapça": "Hiçbir faydası yok"
  },
  {
    "Türkçe": "ما بِكَ/ما بِكِ/ ما بِهِ/ ما بِها...",
    "Arapça": "Sorun ne? / Neyin var?"
  },
  {
    "Türkçe": "تَسَوُّس الأَسْنَان",
    "Arapça": "Diş çürüğü"
  },
  {
    "Türkçe": "سَرِير مُتَحَرِّك",
    "Arapça": "Tekerlekli yatak"
  },
  {
    "Türkçe": "صُورَة أَشِعَّة",
    "Arapça": "Röntgen"
  },
  {
    "Türkçe": "إِبْرَة، إِبَر",
    "Arapça": "İğne"
  },
  {
    "Türkçe": "عَمَلِيَّة جِرَاحِيَّة",
    "Arapça": "Ameliyat"
  },
  {
    "Türkçe": "كُرَة القَدَم",
    "Arapça": "Futbol"
  },
  {
    "Türkçe": "ضِمَاد، ضِمَادَات",
    "Arapça": "Bandaj"
  },
  {
    "Türkçe": "زُكَام",
    "Arapça": "Nezle"
  },
  {
    "Türkçe": "إِسْعَاف",
    "Arapça": "Ambulans, acil servis"
  },
  {
    "Türkçe": "عُطَاس",
    "Arapça": "Hapşırma"
  },
  {
    "Türkçe": "تَعِبَ، يَتْعَب، تَعَب",
    "Arapça": "Yorulmak"
  },
  {
    "Türkçe": "جِسْم، أَجْسَام",
    "Arapça": "Vücut"
  },
  {
    "Türkçe": "مُضَادّ حَيَوِيّ",
    "Arapça": "Antibiyotik"
  },
  {
    "Türkçe": "اِبْتَعَد، يَبْتَعِد، اِبْتِعَاد (عن)",
    "Arapça": "Dan uzak durmak"
  },
  {
    "Türkçe": "مُتَشَابِه",
    "Arapça": "Benzer; benzeyen"
  },
  {
    "Türkçe": "اِسْتَمَرّ، يَسْتَمِرّ، اِسْتِمْرَار",
    "Arapça": "Devam etmek"
  },
  {
    "Türkçe": "سَائِل، سَوَائِل",
    "Arapça": "İçecek"
  },
  {
    "Türkçe": "مِنْشَفَة، مَنَاشِف",
    "Arapça": "Havlu"
  },
  {
    "Türkçe": "نَصَح، يَنْصَح، نُصْح (بـ)",
    "Arapça": "Tavsiye etmek"
  },
  {
    "Türkçe": "نَصِيحَة",
    "Arapça": "Öğüt; nasihat; tavsiye"
  },
  {
    "Türkçe": "عِلَاج",
    "Arapça": "Tedavi, terapi"
  },
  {
    "Türkçe": "صُدَاع",
    "Arapça": "Baş ağrısı"
  },
  {
    "Türkçe": "سُعَال",
    "Arapça": "Öksürük; öksürme"
  },
  {
    "Türkçe": "أُصِيب، يُصَاب، إِصَابة (بِـ)",
    "Arapça": "Yaralanmak/enfekte olmak"
  },
  {
    "Türkçe": "مَعِدَة",
    "Arapça": "Mide"
  },
  {
    "Türkçe": "حَمَى، يَحْمِي، حِمَايَة (من)",
    "Arapça": "Korumak"
  },
  {
    "Türkçe": "تَجَنَّب، يَتَجَنَّب، تَجَنُّب",
    "Arapça": "Kaçınmak"
  },
  {
    "Türkçe": "عِدَّة (أيّام/ أَشْهُر/ ساعات)",
    "Arapça": "Birçok"
  },
  {
    "Türkçe": "نَقَل، يَنْقُلُ، نَقْل",
    "Arapça": "Nakletmek"
  },
  {
    "Türkçe": "دَوَاء، أَدْوِيَة",
    "Arapça": "İlaç"
  },
  {
    "Türkçe": "مُسَكِّن",
    "Arapça": "Ağrı kesici"
  },
  {
    "Türkçe": "حُفْرة",
    "Arapça": "Çukur; delik"
  },
  {
    "Türkçe": "حُمَّى",
    "Arapça": "Ateş"
  },
  {
    "Türkçe": "بُقْعَة، بُقَع",
    "Arapça": "Nokta, leke"
  },
  {
    "Türkçe": "سَيَلَان الأَنْف",
    "Arapça": "Burun akıntısı"
  },
  {
    "Türkçe": "أَعْرَاض",
    "Arapça": "Belirtiler"
  },
  {
    "Türkçe": "شَدِيد - قَوِيّ",
    "Arapça": "Güçlü, şiddetli"
  },
  {
    "Türkçe": "سَبَّب، يُسَبِّب، تَسْبِيب",
    "Arapça": "Neden olmak"
  },
  {
    "Türkçe": "لِقَاح، لِقَاحَات",
    "Arapça": "Aşı"
  },
  {
    "Türkçe": "شَكَا، يَشْكُو، شَكْوَى/شِكَايَة + من",
    "Arapça": "Şikayet etmek"
  },
  {
    "Türkçe": "خَفَّف، يُخَفِّف، تَخْفِيف",
    "Arapça": "Azaltmak, hafifletmek"
  },
  {
    "Türkçe": "وَقَى، يَقِي، وِقَايَة (مِن)",
    "Arapça": "(bir hastalığı, sorunu vb.) önlemek"
  },
  {
    "Türkçe": "زَنْجَبِيل",
    "Arapça": "Zencefil"
  },
  {
    "Türkçe": "مَيِّت/مَيْت",
    "Arapça": "Ölü"
  },
  {
    "Türkçe": "مَنَع، يَمْنَع، مَنْع",
    "Arapça": "Önlemek"
  },
  {
    "Türkçe": "حَيّ",
    "Arapça": "Hayatta; canlı"
  },
  {
    "Türkçe": "أَلَم، آلَام",
    "Arapça": "Ağrı"
  },
  {
    "Türkçe": "بَدَا، يَبْدُو + أنَّ",
    "Arapça": "Gibi görünmek"
  },
  {
    "Türkçe": "انتَشَرَ، ينتَشِر، اِنْتِشَار",
    "Arapça": "Yaymak; yaygınlaşmak"
  },
  {
    "Türkçe": "تَسوَّسَ، يَتَسوَّسُ، تَسَوُّس",
    "Arapça": "[diş] çürümek"
  },
  {
    "Türkçe": "يَحْتَوِي + عَلَى",
    "Arapça": "İçermek"
  },
  {
    "Türkçe": "غَيَّرَ، يُغَيِّرُ، تَغْيِير",
    "Arapça": "Değiştirmek"
  },
  {
    "Türkçe": "جَعَلَ، يَجْعَلُ، جَعْل + مفعول به",
    "Arapça": "Yapmak; etmek; kılmak"
  },
  {
    "Türkçe": "وَخَاصَّةً",
    "Arapça": "Özellikle"
  },
  {
    "Türkçe": "اِرتَفَع، يَرتَفِع، ارتِفاع",
    "Arapça": "Yükselmek"
  },
  {
    "Türkçe": "اِنخَفَض، ينخَفِض، انخِفاض",
    "Arapça": "Düşmek"
  },
  {
    "Türkçe": "اِنتَبَه، يَنتَبِه، اِنتِباه (إلى)",
    "Arapça": "Dikkat etmek"
  },
  {
    "Türkçe": "سمَحَ، يسمَح، سماح (لِشخص بشيء)",
    "Arapça": "(birinin bir şey yapmasına) izin vermek"
  },
  {
    "Türkçe": "أثَّر، يُؤَثِّر، تأثير (على)",
    "Arapça": "Etkilemek"
  },
  {
    "Türkçe": "تَرَك، يترُك، تَرك",
    "Arapça": "dan ayrılmak"
  },
  {
    "Türkçe": "رَغِبَ، يرغَب، رَغبة (ب)",
    "Arapça": "Dilemek / arzulamak"
  },
  {
    "Türkçe": "اِتَّبَع، يَتَّبِع، اِتِّباع",
    "Arapça": "Uymak; takip etmek"
  },
  {
    "Türkçe": "نَعِسَ، يَنعَس، نُعاس",
    "Arapça": "Uykulu hissetmek"
  },
  {
    "Türkçe": "سَهِر، يسهَر، سَهَر",
    "Arapça": "Uyanık kalmak; uyumamak"
  },
  {
    "Türkçe": "استَمَرّ، يستمِرُّ، استِمرار",
    "Arapça": "Devam etmek"
  },
  {
    "Türkçe": "استشار، يستشير، استِشارة",
    "Arapça": "a danışmak"
  },
  {
    "Türkçe": "مَهَمّة / ج. مَهام",
    "Arapça": "Görev"
  },
  {
    "Türkçe": "معلومة/ ج. معلومات",
    "Arapça": "Bilgi"
  },
  {
    "Türkçe": "مَرَض/ ج. أمراض",
    "Arapça": "Hastalık"
  },
  {
    "Türkçe": "عُمر/ ج. أعمار",
    "Arapça": "Yaş"
  },
  {
    "Türkçe": "باحث/ج. باحِثون",
    "Arapça": "Araştırmacı"
  },
  {
    "Türkçe": "الجُوع",
    "Arapça": "Açlık"
  },
  {
    "Türkçe": "الشَّبَع",
    "Arapça": "Tokluk"
  },
  {
    "Türkçe": "رائِحة/ج. رَوائِح",
    "Arapça": "Koku"
  },
  {
    "Türkçe": "ضَغط الدّم",
    "Arapça": "Tansiyon"
  },
  {
    "Türkçe": "مَعجون الأسنان",
    "Arapça": "Diş macunu"
  },
  {
    "Türkçe": "السُّكَّري",
    "Arapça": "Diyabet"
  },
  {
    "Türkçe": "الأَرَق",
    "Arapça": "Uykusuzluk"
  },
  {
    "Türkçe": "القلب",
    "Arapça": "Kalp"
  },
  {
    "Türkçe": "رَضيع/ ج. رُضَّع",
    "Arapça": "Bebek"
  },
  {
    "Türkçe": "سَلبيّ",
    "Arapça": "Olumsuz"
  },
  {
    "Türkçe": "خَطير",
    "Arapça": "Tehlikeli"
  },
  {
    "Türkçe": "إيجابيّ",
    "Arapça": "Olumlu/pozitif ≠ سَلْبِيّ"
  },
  {
    "Türkçe": "بالغ",
    "Arapça": "Yetişkin"
  },
  {
    "Türkçe": "قِلّة + اسم",
    "Arapça": "Bir şeyin eksikliği"
  },
  {
    "Türkçe": "غَنِيّ (بِـ)",
    "Arapça": "(... açısından) zengin"
  },
  {
    "Türkçe": "مُظلِم",
    "Arapça": "Karanlık"
  },
  {
    "Türkçe": "القُدرة على + مصدر",
    "Arapça": "Bir şeyi yapabilme yeteneği"
  },
  {
    "Türkçe": "في غاية (اسم)",
    "Arapça": "Gayet (+ sıfat)"
  },
  {
    "Türkçe": "الشعور بِ (اسم)",
    "Arapça": "(bir şey) hissetmek"
  },
  {
    "Türkçe": "(يفعل) بالقوّة",
    "Arapça": "Güç kullanarak"
  },
  {
    "Türkçe": "بِشَكلٍ كبير",
    "Arapça": "Büyük ölçüde; çok"
  },
  {
    "Türkçe": "زيادة الوزن",
    "Arapça": "Kilo almak; kilolu olmak"
  },
  {
    "Türkçe": "(فعل) بِسُهولة",
    "Arapça": "Kolaylıkla; kolayca"
  },
  {
    "Türkçe": "بِصُعوبة",
    "Arapça": "Zorlukla"
  },
  {
    "Türkçe": "طَوَى، يَطْوِي، طَيّ",
    "Arapça": "Katlamak"
  },
  {
    "Türkçe": "تَحَسَّنَ، يَتَحسَّن، تَحَسُّن",
    "Arapça": "Gelişmek, iyileşmek"
  },
  {
    "Türkçe": "بَسَطَ، يَبْسُطُ، بَسْط",
    "Arapça": "Açmak"
  },
  {
    "Türkçe": "حَكَم، يَحْكُمُ، حُكْم",
    "Arapça": "Yönetmek"
  },
  {
    "Türkçe": "تَحَكَّم بِـ، يَتَحَكَّمُ بِـ، تحَكُّم بِـ",
    "Arapça": "Kontrol etmek"
  },
  {
    "Türkçe": "أَخْفَى، يُخْفِي، إِخْفَاء",
    "Arapça": "Gizlemek"
  },
  {
    "Türkçe": "رَحِمَ، يَرْحَم، رَحْمَة",
    "Arapça": "Merhamet etmek"
  },
  {
    "Türkçe": "خَاف، يَخاف، خَوْف + مِن",
    "Arapça": "Korkmak"
  },
  {
    "Türkçe": "عَبَد، يَعْبُد، عِبَادة (تَعَبّد)",
    "Arapça": "İbadet etmek"
  },
  {
    "Türkçe": "غَاب، يَغِيب، غِيَاب",
    "Arapça": "Bir yerde yok olmak"
  },
  {
    "Türkçe": "أَشْرَف - يُشْرِف - إِشْرَاف",
    "Arapça": "Denetlemek"
  },
  {
    "Türkçe": "فَرِح - يَفْرَح - فَرَح",
    "Arapça": "Mutlu olmak"
  },
  {
    "Türkçe": "لَقِيَ، يَلْقَى، لِقاء",
    "Arapça": "Buluşmak"
  },
  {
    "Türkçe": "ضَرَب، يَضْرِب، ضَرْب",
    "Arapça": "Vurmak"
  },
  {
    "Türkçe": "قَامَ بـ، يَقُوم بِـ، قِيَام بِـ [+ مصدر]",
    "Arapça": "Yapmak/etmek"
  },
  {
    "Türkçe": "أَضاء، يُضِيء، إِضَاءة",
    "Arapça": "Aydınlatmak"
  },
  {
    "Türkçe": "الرِّيف",
    "Arapça": "Kırsal bölge"
  },
  {
    "Türkçe": "حُسْن = جَمَال",
    "Arapça": "Güzellik"
  },
  {
    "Türkçe": "شَيءٌ حَسَن",
    "Arapça": "Güzel bir şey"
  },
  {
    "Türkçe": "كُبْرَى",
    "Arapça": "En büyük"
  },
  {
    "Türkçe": "صُغْرَى",
    "Arapça": "En küçük"
  },
  {
    "Türkçe": "حَصِير",
    "Arapça": "Hasır"
  },
  {
    "Türkçe": "فِراش",
    "Arapça": "Yatak, döşek"
  },
  {
    "Türkçe": "لِحاف",
    "Arapça": "Yorgan"
  },
  {
    "Türkçe": "زاوِيَة، زَوَايَا",
    "Arapça": "Köşe"
  },
  {
    "Türkçe": "مُسْتَقِلّ",
    "Arapça": "Müstakil; bağımsız"
  },
  {
    "Türkçe": "حارَة",
    "Arapça": "Sokak"
  },
  {
    "Türkçe": "حَولَ",
    "Arapça": "Etrafında"
  },
  {
    "Türkçe": "مِخَدّة",
    "Arapça": "Yastık"
  },
  {
    "Türkçe": "نُور، أَنْوَار",
    "Arapça": "Işık"
  },
  {
    "Türkçe": "[يفعل شيئاً] بنفسه",
    "Arapça": "[bir şey yapmak] tek başına"
  },
  {
    "Türkçe": "مِن حينٍ لِآخر",
    "Arapça": "Zaman zaman"
  },
  {
    "Türkçe": "أمّا ... فـ...",
    "Arapça": "... ise ..."
  },
  {
    "Türkçe": "بَعْدَ أَنْ (فَعَل / يَفْعَل)",
    "Arapça": "Yaptıktan sonra"
  },
  {
    "Türkçe": "بَسِيط، بَسَاطَة",
    "Arapça": "Basit; basitlik"
  },
  {
    "Türkçe": "مَمْلُوء = مَلِيء",
    "Arapça": "Dolu"
  },
  {
    "Türkçe": "مَال",
    "Arapça": "Para"
  },
  {
    "Türkçe": "حِكَايَة",
    "Arapça": "Hikaye"
  },
  {
    "Türkçe": "في غَايَةِ الـ [+ مصدر]",
    "Arapça": "Gayet ...; çok ..."
  },
  {
    "Türkçe": "عالم، علماء",
    "Arapça": "Alim"
  },
  {
    "Türkçe": "اِجْتَمَع، يَجْتَمِع، اِجْتِمَاع",
    "Arapça": "Toplanmak; buluşmak"
  },
  {
    "Türkçe": "عصر",
    "Arapça": "Çağ; devir"
  },
  {
    "Türkçe": "نشأ، ينشأ",
    "Arapça": "Büyümek"
  },
  {
    "Türkçe": "ناقَش، يُناقش، مُناقَشة",
    "Arapça": "Tartışmak"
  },
  {
    "Türkçe": "بداية",
    "Arapça": "Başlamak"
  },
  {
    "Türkçe": "مُجَلَّدات",
    "Arapça": "Cilt"
  },
  {
    "Türkçe": "الأَخْلاق",
    "Arapça": "Ahlâk"
  },
  {
    "Türkçe": "أَشْهَر",
    "Arapça": "En meşhur; en ünlü"
  },
  {
    "Türkçe": "رَحِمَ الله",
    "Arapça": "Allah rahmet eylesin"
  },
  {
    "Türkçe": "طَرِيفَة",
    "Arapça": "Komik"
  },
  {
    "Türkçe": "قِصَص طَرِيفَة",
    "Arapça": "Komik hikayeler"
  },
  {
    "Türkçe": "يَتِيم",
    "Arapça": "Yetim"
  },
  {
    "Türkçe": "فَقِير",
    "Arapça": "Fakir"
  },
  {
    "Türkçe": "الباقي",
    "Arapça": "Kalan"
  },
  {
    "Türkçe": "غادَرَ، يُغادِرُ، مُغَادَرَة",
    "Arapça": "[bir yerden] ayrılmak"
  },
  {
    "Türkçe": "الحُزْن",
    "Arapça": "Mutsuzluk"
  },
  {
    "Türkçe": "لم تَكُن",
    "Arapça": "Değildi; olmadı"
  },
  {
    "Türkçe": "نهاية",
    "Arapça": "Son"
  },
  {
    "Türkçe": "النَّبات",
    "Arapça": "Bitkiler"
  },
  {
    "Türkçe": "الحَيَوان",
    "Arapça": "Hayvan"
  },
  {
    "Türkçe": "يُقال",
    "Arapça": "Söylendi"
  },
  {
    "Türkçe": "المسائِلُ اللُّغَوِيّة",
    "Arapça": "Dilsel konular/dilsel sorunlar"
  },
  {
    "Türkçe": "زادَ، يزيدُ، زِيَادَة",
    "Arapça": "Artırmak"
  },
  {
    "Türkçe": "فَرْع، فُرُوع",
    "Arapça": "Şube"
  },
  {
    "Türkçe": "صِفة، صِفات",
    "Arapça": "Karakteristik, özellikler"
  },
  {
    "Türkçe": "بَخِيل، بُخَلاء",
    "Arapça": "Cimri; pinti"
  },
  {
    "Türkçe": "وَقَعَ",
    "Arapça": "Düşmek"
  },
  {
    "Türkçe": "استَأْجَرَ، يَسْتَأْجِرُ",
    "Arapça": "Kiralamak"
  },
  {
    "Türkçe": "أَنْفَقَ، يُنْفِقُ",
    "Arapça": "Para harcamak"
  },
  {
    "Türkçe": "الأَهْل",
    "Arapça": "Aile"
  },
  {
    "Türkçe": "وَسِيلة - وَسائل",
    "Arapça": "Vesile; araç"
  },
  {
    "Türkçe": "تَواصَلَ - يَتَواصَل - تَوَاصُل",
    "Arapça": "İletişim"
  },
  {
    "Türkçe": "سُوء تَفَاهُم",
    "Arapça": "Yanlış anlaşılma"
  },
  {
    "Türkçe": "حَدِيث - أحاديث",
    "Arapça": "Konuşma"
  },
  {
    "Türkçe": "اِحْتِرَام",
    "Arapça": "Saygı"
  },
  {
    "Türkçe": "حَذِر",
    "Arapça": "Dikkatli"
  },
  {
    "Türkçe": "مُعْظَم",
    "Arapça": "Çoğu"
  },
  {
    "Türkçe": "يُؤْذِي",
    "Arapça": "Zarar vermek"
  },
  {
    "Türkçe": "تَجَاهُل",
    "Arapça": "Görmezden gelmek"
  },
  {
    "Türkçe": "عَبَّرَ- يُعَبِّر- تَعَابير",
    "Arapça": "İfade etmek"
  },
  {
    "Türkçe": "خَجِلَ - يَخْجَل",
    "Arapça": "Utangaç olmak"
  },
  {
    "Türkçe": "لُغَة الجَسَد",
    "Arapça": "Beden dili"
  },
  {
    "Türkçe": "اِجْتِماعيّ",
    "Arapça": "Sosyal; girişken"
  },
  {
    "Türkçe": "أَدَّى - يُؤَدِّي + إلى",
    "Arapça": "a yol açmak"
  },
  {
    "Türkçe": "مُجْتَمَع - مُجْتَمَعات",
    "Arapça": "Toplum"
  },
  {
    "Türkçe": "اِنْطِوَائِيّ",
    "Arapça": "İçe dönük"
  },
  {
    "Türkçe": "اِفْتِرَاضِيّ",
    "Arapça": "Sanal"
  },
  {
    "Türkçe": "وَاقِعِيّ",
    "Arapça": "Gerçekçi"
  },
  {
    "Türkçe": "فَرْد - أَفْرَاد",
    "Arapça": "Birey; fert"
  },
  {
    "Türkçe": "شُعُور",
    "Arapça": "His; duygu"
  },
  {
    "Türkçe": "مُزَيَّف",
    "Arapça": "Sahte"
  },
  {
    "Türkçe": "حَقِيقِيّ",
    "Arapça": "Gerçek"
  },
  {
    "Türkçe": "اِخْتِلاف",
    "Arapça": "Fark"
  },
  {
    "Türkçe": "وَجْهاً لِوَجْهٍ",
    "Arapça": "Yüz yüze"
  },
  {
    "Türkçe": "جِهَاز - أَجْهِزَة",
    "Arapça": "Cihaz"
  },
  {
    "Türkçe": "أَرْسَل - يُرْسِل",
    "Arapça": "Göndermek"
  },
  {
    "Türkçe": "اِلْتِقَاط الصُّوَر",
    "Arapça": "Fotoğraf çekmek"
  },
  {
    "Türkçe": "تَطْبِيق- تَطْبِيقَات",
    "Arapça": "Uygulama"
  },
  {
    "Türkçe": "بِوَاسِطَة",
    "Arapça": "Kullanarak/üzerinden"
  },
  {
    "Türkçe": "رِسَالة - رَسَائِل",
    "Arapça": "Mesaj/mektup"
  },
  {
    "Türkçe": "رَدَّ - يَرُدّ",
    "Arapça": "Yanıtlamak; cevaplamak"
  },
  {
    "Türkçe": "فِي أَيِّ وَقْت",
    "Arapça": "Herhangi bir zamanda"
  },
  {
    "Türkçe": "مُكالَمَة - مُكالَمَات",
    "Arapça": "Görüşme (telefon görüşmesi)"
  },
  {
    "Türkçe": "أَزْعَج - يُزْعِج",
    "Arapça": "Rahatsız etmek"
  },
  {
    "Türkçe": "بَدَلاً مِن",
    "Arapça": "Yerine"
  },
  {
    "Türkçe": "سَاعة مُنَبِّه",
    "Arapça": "Alarm saati"
  },
  {
    "Türkçe": "رَكَّز - يُرَكِّز + عَلَى",
    "Arapça": "Odaklanmak, dikkatini vermek"
  },
  {
    "Türkçe": "وَضْع عَدَم الإِزْعَاج",
    "Arapça": "Rahatsız Etmeyin Modu"
  },
  {
    "Türkçe": "خَرِيطَة",
    "Arapça": "Harita"
  },
  {
    "Türkçe": "شَتَّتَ - يُشَتِّت (الاِنْتِبَاه)",
    "Arapça": "Dikkat dağıtmak"
  },
  {
    "Türkçe": "وَلَوْ لِفَتْرَةٍ قَصِيرَةٍ",
    "Arapça": "Kısa bir süreliğine de olsa"
  }
]
};

const pages = document.querySelectorAll('.page');
const navButtons = document.querySelectorAll('[data-target]');
const backButtons = document.querySelectorAll('.back-btn');
let historyStack = [];

// Sayfa gösterme
function showPage(id) {
  pages.forEach(p => p.classList.remove('active'));
  document.getElementById(id).classList.add('active');
}

// Geçiş butonları
navButtons.forEach(btn => {
  btn.addEventListener('click', () => {
    historyStack.push(document.querySelector('.page.active').id);
    const next = btn.dataset.target;
    if (btn.dataset.course) {
      document.getElementById('course-title').innerText = btn.dataset.course;
    }
    showPage(next);
    if (next === 'page-test') initTest();
  });
});

// Geri butonları
backButtons.forEach(btn => {
  btn.addEventListener('click', () => {
    const prev = historyStack.pop();
    if (prev) showPage(prev);
  });
});

// Öğren
document.getElementById('shuffle-learn').addEventListener('click', () => {
  const course = document.getElementById('course-title').innerText;
  const list = database[course] || [];
  if (!window.learnQueue) window.learnQueue = [...list];
  if (!window.learnQueue.length) window.learnQueue = [...list];
  const item = window.learnQueue.splice(Math.floor(Math.random()*window.learnQueue.length),1)[0];
  document.querySelector('.word-display').innerText = `${item.Arapça} — ${item.Türkçe}`;
});

// Test Et
let streak = 0, currentItem;
function initTest() {
  // En yüksek streak'i yükle
  const course = document.getElementById('course-title').innerText;
  let best = localStorage.getItem(`bestStreak_${course}`) || 0;
  best = parseInt(best, 10);
  document.getElementById('best-streak-count').innerText = best;

  streak = 0;
  document.getElementById('streak-count').innerText = streak;
  // Best streak güncelle
  let bestKey = `bestStreak_${document.getElementById('course-title').innerText}`;
  let currentBest = parseInt(localStorage.getItem(bestKey) || 0, 10);
  if (streak > currentBest) {
    localStorage.setItem(bestKey, streak);
    document.getElementById('best-streak-count').innerText = streak;
  }
  document.getElementById('streak-msg').innerText = '';
  generateQuestion();
}
function generateQuestion() {
  const course = document.getElementById('course-title').innerText;
  const list = database[course] || [];
  if (!list.length) return;
  const dir = document.querySelector('input[name="dir"]:checked').value;
  const isTrAra = dir==='TR-ARA';
  currentItem = list[Math.floor(Math.random()*list.length)];
  let opts=[currentItem];
  while(opts.length<4) {
    const rand=list[Math.floor(Math.random()*list.length)];
    if(!opts.includes(rand)) opts.push(rand);
  }
  shuffleArray(opts);
  document.querySelector('.q-text').innerText = isTrAra?currentItem.Türkçe:currentItem.Arapça;
  const ul=document.querySelector('.options');
  ul.innerHTML='';
  opts.forEach(opt=> {
    const btn=document.createElement('button');
    btn.innerText = isTrAra?opt.Arapça:opt.Türkçe;
    btn.addEventListener('click', ()=>checkAnswer(opt,isTrAra,btn));
    const li=document.createElement('li');
    li.appendChild(btn);
    ul.appendChild(li);
  });
}
function checkAnswer(opt,isTrAra,btn) {
  const correct = isTrAra?currentItem.Arapça:currentItem.Türkçe;
  document.querySelectorAll('.options button').forEach(b=>b.disabled=true);
  document.querySelectorAll('.options button').forEach(b=> {
    if(b.innerText===correct) b.style.background='#c8e6c9';
    else if(b===btn) b.style.background='#ffcdd2';
  });
  streak = (btn.innerText===correct)?streak+1:0;
  document.getElementById('streak-count').innerText = streak;
  // Best streak güncelle
  let bestKey = `bestStreak_${document.getElementById('course-title').innerText}`;
  let currentBest = parseInt(localStorage.getItem(bestKey) || 0, 10);
  if (streak > currentBest) {
    localStorage.setItem(bestKey, streak);
    document.getElementById('best-streak-count').innerText = streak;
  }
  const msgs={5:"Harika! 5 doğru",10:"Süpersin! 10 doğru",20:"Müthiş! 20 doğru"};
  document.getElementById('streak-msg').innerText = msgs[streak]||'';
}
document.getElementById('shuffle-test').addEventListener('click', generateQuestion);

// Arama
document.getElementById('btn-search').addEventListener('click', () => {
  const q=document.getElementById('search-input').value.trim().toLowerCase();
  const list=database[document.getElementById('course-title').innerText]||[];
  const found=list.filter(i=>i.Arapça.toLowerCase()===q||i.Türkçe.toLowerCase()===q);
  const res=document.getElementById('search-result');
  res.innerHTML = found.length?found.map(i=>`<p>${i.Arapça} — ${i.Türkçe}</p>`).join(''):'Kelime bulunamadı.';
});

// Yardımcı: shuffle
function shuffleArray(a) {
  for(let i=a.length-1;i>0;i--) {
    const j=Math.floor(Math.random()*(i+1));
    [a[i],a[j]]=[a[j],a[i]];
  }
}


// --- Drag & Drop Game Setup ---
const dragDataAll = [
  { id: 0, Arabca: 'يَتَحَدَّث', Turkce: 'Konuşuyor' },
  { id: 1, Arabca: 'يَسْتَمِع', Turkce: 'Dinliyor' },
  { id: 2, Arabca: 'يُسَاعِد', Turkce: 'Yardım ediyor' },
  { id: 3, Arabca: 'يَتَجَوَّل', Turkce: 'Dolaşıyor' },
  { id: 4, Arabca: 'يَزُور', Turkce: 'Ziyaret ediyor' },
  { id: 5, Arabca: 'يَلْعَب', Turkce: 'Oynuyor' },
  { id: 6, Arabca: 'يَقْضِي (وَقْتاً)', Turkce: 'Vakit geçiyor' },
  { id: 7, Arabca: 'يُصَحِّح', Turkce: 'Düzenliyor' },
  { id: 8, Arabca: 'يَحفَظ', Turkce: 'Ezberliyor' },
  { id: 9, Arabca: 'يَرجِع', Turkce: 'Dönüyor' },
  { id: 10, Arabca: 'يَذهَب', Turkce: 'Gidiyor' },
  { id: 11, Arabca: 'خرج', Turkce: 'Çıkmak' },
  { id: 12, Arabca: 'يدخل', Turkce: 'Girmek' },
  { id: 13, Arabca: 'يُعْطِي', Turkce: 'Veriyor' },
  { id: 14, Arabca: 'لأخذ', Turkce: 'Almak' },
  { id: 15, Arabca: 'يُشَاهِد', Turkce: 'İzliyor' },
  { id: 16, Arabca: 'مَقهَى', Turkce: 'Kafe' },
  { id: 17, Arabca: 'لُعبَة', Turkce: 'Oyun' },
  { id: 18, Arabca: 'زبون', Turkce: 'Müşteri' },
  { id: 19, Arabca: 'مَقَال', Turkce: 'Makale' },
  { id: 20, Arabca: 'قِصَّة', Turkce: 'Hikaye' },
  { id: 21, Arabca: 'أُغْنِيَة', Turkce: 'Şarkı' },
  { id: 22, Arabca: 'نصيحة', Turkce: 'Nasihat' },
  { id: 23, Arabca: 'مرات', Turkce: 'Kere' },
  { id: 24, Arabca: 'هَادِئ', Turkce: 'Sakin' },
  { id: 25, Arabca: 'مُرِيح', Turkce: 'Rahat' },
  { id: 26, Arabca: 'أحيانا', Turkce: 'Bazen' },
  { id: 27, Arabca: 'دَائِماً', Turkce: 'Her zaman' },
  { id: 28, Arabca: 'نادرا', Turkce: 'Nadiren' },
  { id: 29, Arabca: 'عَادةً', Turkce: 'Genellikle' },
  { id: 30, Arabca: 'تَقْرِيباً', Turkce: 'Neredeyse' },
  { id: 31, Arabca: 'كُلَّ يَوم', Turkce: 'Her gün' },
  { id: 32, Arabca: 'كُلَّ أسبوع', Turkce: 'Her hafta' },
  { id: 33, Arabca: 'كُلَّ شَهْر', Turkce: 'Her ay' },
  { id: 34, Arabca: 'فَقَط', Turkce: 'Sadece' },
  { id: 35, Arabca: 'مِن جَدِيد', Turkce: 'Yeniden' },
  { id: 36, Arabca: 'مَعاً', Turkce: 'Birlikte' },
  { id: 37, Arabca: 'جُمْلَة', Turkce: 'Cümle' },
  { id: 38, Arabca: 'مُمْتِع', Turkce: 'Eğlenceli' },
  { id: 39, Arabca: 'مُفِيد', Turkce: 'Faydalı' },
  { id: 40, Arabca: 'غَالِباً', Turkce: 'Sıklıkla' },
  { id: 41, Arabca: 'أَبَداً', Turkce: 'Asla' },
  { id: 42, Arabca: 'كُلَّ سَنَة', Turkce: 'Her sene' },
  { id: 43, Arabca: 'كَذلِك', Turkce: 'Ayrıca' },
  { id: 44, Arabca: 'لِهذا السَّبَب', Turkce: 'Bu yüzden' },
  { id: 45, Arabca: 'يَتَنَاوَل', Turkce: 'Yemek yiyor' },
  { id: 46, Arabca: 'يُمَارِس (الرياضة)', Turkce: 'Spor yapıyor' },
  { id: 47, Arabca: 'يَجِبُ أَن', Turkce: 'Gerekiyor' },
  { id: 48, Arabca: 'يُجَهِّز = يُحَضِّر', Turkce: 'Hazırlıyor' },
  { id: 49, Arabca: 'يَلبَس', Turkce: 'Giyiyor' },
  { id: 50, Arabca: 'يَسْتَيْقِظ', Turkce: 'Uyanıyor' },
  { id: 51, Arabca: 'يَشْتَرِي', Turkce: 'Satın alıyor' },
  { id: 52, Arabca: 'يَنْتَهِي', Turkce: 'Bitiyor' },
  { id: 53, Arabca: 'يَسْتَحِمّ', Turkce: 'Duş alıyor' },
  { id: 54, Arabca: 'يَغْسِل', Turkce: 'Yıkıyor' },
  { id: 55, Arabca: 'يُنَظِّف', Turkce: 'Temizliyor' },
  { id: 56, Arabca: 'يَسْتَرِيح - اِسْتِرَاحَة', Turkce: 'Dinleniyor' },
  { id: 57, Arabca: 'يَسْتَطِيع', Turkce: 'Yapabiliyor' },
  { id: 58, Arabca: 'مَلَابِس', Turkce: 'Elbiseler' },
  { id: 59, Arabca: 'مَوْعِد', Turkce: 'Randevu' },
  { id: 60, Arabca: 'نَادِي', Turkce: 'Kulüp' },
  { id: 61, Arabca: 'وَجْه', Turkce: 'Yüz' },
  { id: 62, Arabca: 'يَد', Turkce: 'El ' },
  { id: 63, Arabca: 'الجَمِيع', Turkce: 'Herkes' },
  { id: 64, Arabca: 'التَّسَوُّق', Turkce: 'Alışveriş' },
  { id: 65, Arabca: 'اِزْدِحَام', Turkce: 'Kalabalık' },
  { id: 66, Arabca: 'نَشَاط', Turkce: 'Aktivite' },
  { id: 67, Arabca: 'التِّلْفَاز', Turkce: 'Televizyon' },
  { id: 68, Arabca: 'واجِب', Turkce: 'Ödev' },
  { id: 69, Arabca: 'سِنّ', Turkce: 'Diş' },
  { id: 70, Arabca: 'زَبُون', Turkce: 'Müşteri' },
  { id: 71, Arabca: 'زَمِيل', Turkce: 'Meslektaş' },
  { id: 72, Arabca: 'وَجْبَة', Turkce: 'Öğün' },
  { id: 73, Arabca: 'مُتَأَخِّر', Turkce: 'Geç' },
  { id: 74, Arabca: 'مُبَكِّر', Turkce: 'Erken' },
  { id: 75, Arabca: 'غَاضِب', Turkce: 'Sinirli' },
  { id: 76, Arabca: 'مُتعِب', Turkce: 'Yorucu' },
  { id: 77, Arabca: 'رائِع', Turkce: 'Harika' },
  { id: 78, Arabca: 'حتَّى الآن', Turkce: 'Şimdiye kadar' },
  { id: 79, Arabca: 'مِن ـــــ حَتَّى ـــــــ', Turkce: '__\'den __\'ye kadar' },
  { id: 80, Arabca: 'إِذَن', Turkce: 'O yüzden' },
  { id: 81, Arabca: 'طَيِّب', Turkce: 'Peki' },
  { id: 82, Arabca: 'مَسَاءً', Turkce: 'Akşam' },
  { id: 83, Arabca: 'صَبَاحاً', Turkce: 'Sabah' },
  { id: 84, Arabca: 'مُباشَرةً', Turkce: 'Hemen' },
  { id: 85, Arabca: 'قَليلاً', Turkce: 'Biraz' },
  { id: 86, Arabca: 'كَثِيراً', Turkce: 'Çok' },
  { id: 87, Arabca: 'بَعدَ قَلِيل', Turkce: 'Kısa süre sonra / Yakında' },
  { id: 88, Arabca: 'بَعدَ ذلِكَ', Turkce: 'Ondan sonra' },
  { id: 89, Arabca: 'خُصُوصاً', Turkce: 'Özellikle' },
  { id: 90, Arabca: 'في أَثناءِ', Turkce: 'O esnada' },
  { id: 91, Arabca: 'ظُهْراً', Turkce: 'Öğlen' },
  { id: 92, Arabca: 'يَحْضُر', Turkce: 'Katılıyor' },
  { id: 93, Arabca: 'زَيت', Turkce: 'Yağ' },
  { id: 94, Arabca: 'خُضار', Turkce: 'Sebze' },
  { id: 95, Arabca: 'بَهارات', Turkce: 'Baharat' },
  { id: 96, Arabca: 'ثُوم', Turkce: 'Sarımsak' },
  { id: 97, Arabca: 'مِلح', Turkce: 'Tuz' },
  { id: 98, Arabca: 'نَعنَاع', Turkce: 'Nane' },
  { id: 99, Arabca: 'وِعاء', Turkce: 'Tencere' },
  { id: 100, Arabca: 'خِيار', Turkce: 'Salatalık' },
  { id: 101, Arabca: 'خَسّ', Turkce: 'Marul' },
  { id: 102, Arabca: 'سُمَّاق', Turkce: 'Sumak' },
  { id: 103, Arabca: 'فُرن', Turkce: 'Fırın' },
  { id: 104, Arabca: 'مَشويّ', Turkce: 'Izgara' },
  { id: 105, Arabca: 'مائِدة', Turkce: 'Sofra' },
  { id: 106, Arabca: 'زَيتُون', Turkce: 'Zeytin' },
  { id: 107, Arabca: 'خُبز', Turkce: 'Ekmek' },
  { id: 108, Arabca: 'طَعْم', Turkce: 'Tat' },
  { id: 109, Arabca: 'مِلعَقَة', Turkce: 'Kaşık' },
  { id: 110, Arabca: 'لَحْم', Turkce: 'Et' },
  { id: 111, Arabca: 'أَرُزّ', Turkce: 'Pirinç & Pilav' },
  { id: 112, Arabca: 'دَجَاج', Turkce: 'Tavuk' },
  { id: 113, Arabca: 'بَقْدُونس', Turkce: 'Maydanoz' },
  { id: 114, Arabca: 'سَلَطَة', Turkce: 'Salata ' },
  { id: 115, Arabca: 'سَمَك', Turkce: 'Balık' },
  { id: 116, Arabca: 'طَمَاطم', Turkce: 'Domates' },
  { id: 117, Arabca: 'بَصَل', Turkce: 'Soğan' },
  { id: 118, Arabca: 'قِطعة', Turkce: 'Parça' },
  { id: 119, Arabca: 'لَبَن', Turkce: 'Yoğurt' },
  { id: 120, Arabca: 'خَلّ', Turkce: 'Sirke' },
  { id: 121, Arabca: 'مَسْلُوق', Turkce: 'Haşlanmış' },
  { id: 122, Arabca: 'مُقَبِّلَات', Turkce: 'Meze' },
  { id: 123, Arabca: 'مُكَسَّرات', Turkce: 'Kuruyemiş' },
  { id: 124, Arabca: 'صِحِّيّ', Turkce: 'Sağlıklı' },
  { id: 125, Arabca: 'شَبْعَان', Turkce: 'Tok' },
  { id: 126, Arabca: 'جَائِع', Turkce: 'Aç' },
  { id: 127, Arabca: 'مَقْلِيّ', Turkce: 'Kızarmış' },
  { id: 128, Arabca: 'نَوْع', Turkce: 'Çeşit' },
  { id: 129, Arabca: 'قَطَعَ', Turkce: 'Doğramak' },
  { id: 130, Arabca: 'حَضَّرَ', Turkce: 'Hazırlamak' },
  { id: 131, Arabca: 'غَسَلَ', Turkce: 'Yıkamak' },
  { id: 132, Arabca: 'بَاذِنْجَان', Turkce: 'Patlıcan' },
  { id: 133, Arabca: 'وَضَعَ', Turkce: 'Koymak' },
  { id: 134, Arabca: 'طَبَخَ', Turkce: 'Pişirmek' },
  { id: 135, Arabca: 'قَدَّمَ', Turkce: 'Servis etmek' },
  { id: 136, Arabca: 'أضافَ', Turkce: 'Eklemek' },
  { id: 137, Arabca: 'نَضَجَ', Turkce: 'Pişmek' },
  { id: 138, Arabca: 'الطَّبَق الرَّئِيسِيّ', Turkce: 'Ana yemek' },
  { id: 139, Arabca: 'أَوَّلاً', Turkce: 'Öncelikle ' },
  { id: 140, Arabca: 'قَائمة الطَّعَام', Turkce: 'Menü' },
  { id: 141, Arabca: 'فُسْتُق', Turkce: 'Fıstık' },
  { id: 142, Arabca: 'على النَّارِ', Turkce: 'Ateş üzerinde' },
  { id: 143, Arabca: 'ثَقَافَة', Turkce: 'Kültür' },
  { id: 144, Arabca: 'يعطيك العافية', Turkce: 'Kolay gelsin' },
  { id: 145, Arabca: 'لو سَمَحْت', Turkce: 'Lütfen' },
  { id: 146, Arabca: 'الاسْمُ الكَرِيم؟', Turkce: 'İsminiz nedir?' },
  { id: 147, Arabca: 'أُسْتَاذ', Turkce: 'Efendi' },
  { id: 148, Arabca: 'حَضْرَتك', Turkce: 'Siz' },
  { id: 149, Arabca: 'طَلَبَ', Turkce: 'Sipariş vermek' },
  { id: 150, Arabca: 'ظَنَّ', Turkce: 'Zannetmek' },
  { id: 151, Arabca: 'قَبْلَ', Turkce: 'Önce ' },
  { id: 152, Arabca: 'بَعدَ', Turkce: 'Sonra' },
  { id: 153, Arabca: 'وَجَبَات سَرِيعة', Turkce: 'Hazır yemek' },
  { id: 154, Arabca: 'بِدُونِ', Turkce: 'Olmadan' },
  { id: 155, Arabca: 'حَجْز', Turkce: 'Rezervasyon' },
  { id: 156, Arabca: 'حِسَاب', Turkce: 'Hesap' },
  { id: 157, Arabca: 'خَفِيف', Turkce: 'Hafif' },
  { id: 158, Arabca: 'طَازَج', Turkce: 'Taze' },
  { id: 159, Arabca: 'مُضِرّ', Turkce: 'Zararlı' },
  { id: 160, Arabca: 'طَحِينة', Turkce: 'Tahin' },
  { id: 161, Arabca: 'صَلْصة', Turkce: 'Sos' },
  { id: 162, Arabca: 'حارّ', Turkce: 'Acı' },
  { id: 163, Arabca: 'مُخَلَّل', Turkce: 'Turşu' },
  { id: 164, Arabca: 'فُطْر', Turkce: 'Mantar' },
  { id: 165, Arabca: 'تَمْر', Turkce: 'Hurma' },
  { id: 166, Arabca: 'حاضر', Turkce: 'Amade' },
  { id: 167, Arabca: 'شَوى', Turkce: 'Mangal yapmak' },
  { id: 168, Arabca: 'المَطْبَخ', Turkce: 'Mutfak' },
  { id: 169, Arabca: 'جار', Turkce: 'Komşu' },
  { id: 170, Arabca: 'مَفْروش', Turkce: 'Eşyalı' },
  { id: 171, Arabca: 'مُطِلَّة على', Turkce: '-a/-e bakıyor' },
  { id: 172, Arabca: 'مَنظَر', Turkce: 'Manzara' },
  { id: 173, Arabca: 'خِزانة', Turkce: 'Dolap' },
  { id: 174, Arabca: 'حَيّ', Turkce: 'Mahalle' },
  { id: 175, Arabca: 'ثَلّاجة', Turkce: 'Buzdolabı' },
  { id: 176, Arabca: 'نافِذَة', Turkce: 'Pencere' },
  { id: 177, Arabca: 'شَقّة', Turkce: 'Daire' },
  { id: 178, Arabca: 'الرّاحة النَّفْسِية', Turkce: 'Huzur' },
  { id: 179, Arabca: 'سِتارة', Turkce: 'Perde' },
  { id: 180, Arabca: 'مُلَوَّنة', Turkce: 'Renkli' },
  { id: 181, Arabca: 'وَحْدي', Turkce: 'Yalnız' },
  { id: 182, Arabca: 'إِيجَار', Turkce: 'Kira' },
  { id: 183, Arabca: 'أريكة', Turkce: 'Kanepe' },
  { id: 184, Arabca: 'السَّطْح', Turkce: 'Çatı' },
  { id: 185, Arabca: 'سَجّادة', Turkce: 'Halı' },
  { id: 186, Arabca: 'جِدار', Turkce: 'Duvar' },
  { id: 187, Arabca: 'حمَّام', Turkce: 'Banyo' },
  { id: 188, Arabca: 'غُرفة الضُّيوف', Turkce: 'Misafir odası' },
  { id: 189, Arabca: 'طُفولة', Turkce: 'Çocukluk' },
  { id: 190, Arabca: 'سَرير', Turkce: 'Yatak' },
  { id: 191, Arabca: 'مُشْمِس', Turkce: 'Güneşli' },
  { id: 192, Arabca: 'الطّابق الأرضِيِّ', Turkce: 'Zemin kat' },
  { id: 193, Arabca: 'شُرْفة', Turkce: 'Balkon' },
  { id: 194, Arabca: 'غُرْفَة', Turkce: 'Oda' },
  { id: 195, Arabca: 'مِصْباح', Turkce: 'Lamba' },
  { id: 196, Arabca: 'غُرْفة النَّوْم', Turkce: 'Yatak odası' },
  { id: 197, Arabca: 'مُذَكَّرات', Turkce: 'Günlükler' },
  { id: 198, Arabca: 'مِصْعَد', Turkce: 'Asansör' },
  { id: 199, Arabca: 'غُرْفة المَعيشة /الجُلوس', Turkce: 'Oturma odası' },
  { id: 200, Arabca: 'لَوْحةٌ', Turkce: 'Resim' },
  { id: 201, Arabca: 'مُرْتَفِع', Turkce: 'Yüksek' },
  { id: 202, Arabca: 'مُنْخَفِض', Turkce: 'Alçak' },
  { id: 203, Arabca: 'دَرَج', Turkce: 'Merdiven' },
  { id: 204, Arabca: 'سَيِّئ', Turkce: 'Kötü' },
  { id: 205, Arabca: 'ضيّق', Turkce: 'Dar' },
  { id: 206, Arabca: 'واسع', Turkce: 'Geniş' },
  { id: 207, Arabca: 'مُزْعِج', Turkce: 'Rahatsız edici' },
  { id: 208, Arabca: 'تَحْت', Turkce: 'Altında' },
  { id: 209, Arabca: 'فَوْق', Turkce: 'Üstünde' },
  { id: 210, Arabca: 'بَيْع', Turkce: 'Satıcı' },
  { id: 211, Arabca: 'شِرَاء', Turkce: 'Alıcı' },
  { id: 212, Arabca: 'اتَّجِهْ', Turkce: '-e/-a doğru gitmek' },
  { id: 213, Arabca: 'مَتْحَف', Turkce: 'Müze' },
  { id: 214, Arabca: 'بِكُلِّ سُرور', Turkce: 'Memnuniyetle' },
  { id: 215, Arabca: 'عَفواً', Turkce: 'Pardon' },
  { id: 216, Arabca: 'اِنعطِفْ', Turkce: '-a/-e dönmek' },
  { id: 217, Arabca: 'اِقْطعي الشارع', Turkce: 'Sokağı geçmek' },
  { id: 218, Arabca: 'اِمْشِ', Turkce: 'Yürümek' },
  { id: 219, Arabca: 'اِتَّصِلْ', Turkce: 'Aramak (Telefonla)' },
  { id: 220, Arabca: 'وَقَف', Turkce: 'Durmak' },
  { id: 221, Arabca: 'وَصَل', Turkce: 'Ulaşmak' },
  { id: 222, Arabca: 'وَجَد', Turkce: 'Bulmak' },
  { id: 223, Arabca: 'على بُعْدِ', Turkce: 'Uzaklıkta' },
  { id: 224, Arabca: 'بِشَكْلٍ مُسْتَقِيم', Turkce: 'Dümdüz' },
  { id: 225, Arabca: 'يَمِين', Turkce: 'Sağ ' },
  { id: 226, Arabca: 'يَسَار', Turkce: 'Sol' },
  { id: 227, Arabca: 'أَمَامَ', Turkce: 'Önünde' },
  { id: 228, Arabca: 'مُقابِلَ', Turkce: 'Karşısında' },
  { id: 229, Arabca: 'خَلْف', Turkce: 'Arkasında' },
  { id: 230, Arabca: 'قَرِيب', Turkce: 'Yakın' },
  { id: 231, Arabca: 'بَعِيد', Turkce: 'Uzak ' },
  { id: 232, Arabca: 'اِرْكَب', Turkce: 'Binmek' },
  { id: 233, Arabca: 'اِنْزِل', Turkce: 'İnmek' },
  { id: 234, Arabca: 'مَوْقِف سَّيَّارَات', Turkce: 'Otopark' },
  { id: 235, Arabca: 'شَارِع', Turkce: 'Cadde' },
  { id: 236, Arabca: 'مَحَطَّة', Turkce: 'İstasyon' },
  { id: 237, Arabca: 'فُندُق', Turkce: 'Otel' },
  { id: 238, Arabca: 'مَحَلَّات تِجَارِيَّة', Turkce: 'Dükkan' },
  { id: 239, Arabca: 'اِنْتَهى', Turkce: 'Bitmek' },
  { id: 240, Arabca: 'عُنْوَان', Turkce: 'Adres' },
  { id: 241, Arabca: 'شارع رئيسيّ', Turkce: 'Ana cadde' },
  { id: 242, Arabca: 'إشارة ضَوئِيّة', Turkce: 'Trafik ışığı' },
  { id: 243, Arabca: 'شَارع فَرْعِيّ', Turkce: 'Ara sokak' },
  { id: 244, Arabca: 'مَعَ الأسف', Turkce: 'Maalesef' },
  { id: 245, Arabca: 'بِالتَّأْكِيد', Turkce: 'Kesinlikle' },
  { id: 246, Arabca: 'بِالتَّحْدِيدِ', Turkce: 'Tam olarak' },
  { id: 247, Arabca: 'يُمْكِن', Turkce: 'Yapabilmek' },
  { id: 248, Arabca: 'بِجانِبِ', Turkce: 'Yanında' },
  { id: 249, Arabca: 'نِهَاية', Turkce: 'Son ' },
  { id: 250, Arabca: 'بِدَاية', Turkce: 'Başlangıç' },
  { id: 251, Arabca: 'اِنْتَظَر', Turkce: 'Beklemek' },
  { id: 252, Arabca: 'أَخْبَر', Turkce: 'Söylemek' },
  { id: 253, Arabca: 'وَسَط', Turkce: 'Orta' },
  { id: 254, Arabca: 'باتِّجَاه', Turkce: 'Yönünde' }
];

// Chunk into groups of 5
const dragGroups = [];
for (let i = 0; i < dragDataAll.length; i += 5) {
  dragGroups.push(dragDataAll.slice(i, i + 5));
}

let currentDragGroup = [];
let matchedCount = 0;

// Shuffle utility
function shuffleArray(a) {
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
}

// Load next drag group
function loadNextDragGroup() {
  matchedCount = 0;
  const dragList = document.getElementById('drag-items');
  const dropList = document.getElementById('drop-zones');
  dragList.innerHTML = '';
  dropList.innerHTML = '';
  // Pick random group
  const idx = Math.floor(Math.random() * dragGroups.length);
  currentDragGroup = dragGroups[idx];
  // Determine direction
  const dir = document.querySelector('input[name="drag-dir"]:checked').value;
  let draggableItems, dropItems;
  if (dir === 'TR-ARA') {
    draggableItems = currentDragGroup.map(item => ({ id: item.id, text: item.Turkce }));
    dropItems = currentDragGroup.map(item => ({ id: item.id, text: item.Arabca }));
  } else {
    draggableItems = currentDragGroup.map(item => ({ id: item.id, text: item.Arabca }));
    dropItems = currentDragGroup.map(item => ({ id: item.id, text: item.Turkce }));
  }
  shuffleArray(draggableItems);
  shuffleArray(dropItems);
  // Create draggable items
  draggableItems.forEach(it => {
    const li = document.createElement('li');
    li.textContent = it.text;
    li.draggable = true;
    li.dataset.id = it.id;
    li.addEventListener('dragstart', dragStart);
    dragList.appendChild(li);
  });
  // Create drop zones
  dropItems.forEach(it => {
    const li = document.createElement('li');
    li.classList.add('drop-zone');
    li.dataset.id = it.id;
    li.textContent = it.text;
    li.addEventListener('dragover', dragOver);
    li.addEventListener('dragleave', dragLeave);
    li.addEventListener('drop', onDrop);
    dropList.appendChild(li);
  });
}

// --- Drag & Drop Handlers ---
let draggedId = null;
function dragStart(e) {
  draggedId = e.target.dataset.id;
}
function dragOver(e) {
  e.preventDefault();
  e.currentTarget.classList.add('over');
}
function dragLeave(e) {
  e.currentTarget.classList.remove('over');
}
function onDrop(e) {
  e.preventDefault();
  e.currentTarget.classList.remove('over');
  const dropId = e.currentTarget.dataset.id;
  if (draggedId === dropId) {
    // correct drop
    const item = document.querySelector(`#drag-items li[data-id='${dropId}']`);
    e.currentTarget.textContent = e.currentTarget.textContent + ' ' + item.textContent;
    e.currentTarget.classList.add('correct');
    item.remove();
    matchedCount++;
    if (matchedCount === currentDragGroup.length) {
      setTimeout(loadNextDragGroup, 500);
    }
  }
}

// Initialize when entering Sürükle Bırak or changing direction
document.querySelector('button[data-target="page-drag"]').addEventListener('click', loadNextDragGroup);
document.querySelectorAll('input[name="drag-dir"]').forEach(r => {
  r.addEventListener('change', loadNextDragGroup);
});


function submitNickname() {
  const nickname = document.getElementById("nickname-input").value.trim();
  if (!nickname) {
    alert("Lütfen geçerli bir kullanıcı adı girin.");
    return;
  }

  localStorage.setItem("nickname", nickname);
  document.getElementById("nickname-container").style.display = "none";
}

// Sayfa açıldığında daha önce kullanıcı adı alınmış mı kontrol et
window.addEventListener("DOMContentLoaded", () => {
  const storedName = localStorage.getItem("nickname");
  if (storedName) {
    document.getElementById("nickname-container").style.display = "none";
  }
});

document.addEventListener("DOMContentLoaded", () => {
  const nickname = localStorage.getItem("nickname");
  const title = document.getElementById("page-title");

  if (nickname && title) {
    title.textContent += nickname;  // Merhaba, MÜCAHİT gibi görünür
  }
});

