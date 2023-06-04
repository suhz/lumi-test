import BeritaHarian from '../src/scraper/berita_harian';

const BeritaHarianFeed = require('../__mocks__/berita_harian');

class BHExtended extends BeritaHarian {
  test(rawData) {
    return this.ingest(rawData);
  }
}

describe('Scrape Berita Harian', () => {
  test('it should ingest raw data and transform into standard format', () => {
    const expected = [
      {
        author: '',
        date: '2023-06-04T14:09:13.000Z',
        imageUrl: 'https://assets.bharian.com.my/images/articles/BH4MEDIAMAUT-O_BHfield_image_listing_featured.var_1685887748.jpg',
        language: 'ms',
        link: 'https://www.bharian.com.my/berita/kes/2023/06/1110278/petugas-media-maut-nahas-motosikal',
        publisherSlug: 'bh',
        sourceId: '1110278',
        title: 'Petugas media maut nahas motosikal',
      },
      {
        author: 'Ruwaida Md Zain',
        date: '2023-06-04T14:07:17.000Z',
        imageUrl: 'https://assets.bharian.com.my/images/articles/olah_BHfield_image_listing_featured.var_1685887632.jpg',
        language: 'ms',
        link: 'https://www.bharian.com.my/sukan/lain-lain/2023/06/1110276/sharmendran-thinaah-dinobat-olahragawan-olahragawati-selangor',
        publisherSlug: 'bh',
        sourceId: '1110276',
        title: 'Sharmendran, Thinaah dinobat Olahragawan, Olahragawati Selangor',
      },
      {
        author: 'Muhaamad Hafis Nawawi',
        date: '2023-06-04T14:05:56.000Z',
        imageUrl: 'https://assets.bharian.com.my/images/articles/BH4SUSULCULIK-O_BHfield_image_listing_featured.var_1685887551.jpg',
        language: 'ms',
        link: 'https://www.bharian.com.my/berita/kes/2023/06/1110274/wanita-tipu-diculik-minta-keluarga-bayar-wang-tebusan-rm100000-dibebas',
        publisherSlug: 'bh',
        sourceId: '1110274',
        title: 'Wanita tipu diculik, minta keluarga bayar wang tebusan RM100,000 dibebas dengan jaminan polis',
      },
      {
        author: 'Hazira Ahmad Zaidi',
        date: '2023-06-04T13:47:45.000Z',
        imageUrl: 'https://assets.bharian.com.my/images/articles/BH4DADAHKRAI-O_BHfield_image_listing_featured.var_1685886460.jpg',
        language: 'ms',
        link: 'https://www.bharian.com.my/berita/kes/2023/06/1110272/polis-tahan-2-lelaki-rampas-600-biji-pil-merah-disyaki-dadah',
        publisherSlug: 'bh',
        sourceId: '1110272',
        title: 'Polis tahan 2 lelaki, rampas 600 biji pil merah disyaki dadah',
      },
      {
        author: '',
        date: '2023-06-04T13:43:26.000Z',
        imageUrl: 'https://assets.bharian.com.my/images/articles/BHIRAP_BHfield_image_listing_featured.var_1685886201.jpg',
        language: 'ms',
        link: 'https://www.bharian.com.my/dunia/asia/2023/06/1110269/iraq-syria-bincang-tangani-perdagangan-dadah-rentas-sempadan',
        publisherSlug: 'bh',
        sourceId: '1110269',
        title: 'Iraq, Syria bincang tangani perdagangan dadah rentas sempadan',
      },
      {
        author: 'Ruwaida Md Zain',
        date: '2023-06-04T13:41:37.000Z',
        imageUrl: 'https://assets.bharian.com.my/images/articles/BH4OLAH-O_BHfield_image_listing_featured.var_1685886092.jpg',
        language: 'ms',
        link: 'https://www.bharian.com.my/berita/nasional/2023/06/1110267/r-sharmendran-m-thinaah-olahragawan-olahragawati-selangor',
        publisherSlug: 'bh',
        sourceId: '1110267',
        title: 'R Sharmendran, M Thinaah olahragawan, olahragawati Selangor',
      },
      {
        author: '',
        date: '2023-06-04T13:39:04.000Z',
        imageUrl: 'https://assets.bharian.com.my/images/articles/BH4DIALOGSHANGRILA-O_BHfield_image_listing_featured.var_1685885938.jpg',
        language: 'ms',
        link: 'https://www.bharian.com.my/berita/nasional/2023/06/1110265/malaysia-perkukuh-kerjasama-pertahanan-melalui-dialog-shangri-la',
        publisherSlug: 'bh',
        sourceId: '1110265',
        title: 'Malaysia perkukuh kerjasama pertahanan melalui Dialog Shangri-La 2023',
      },
      {
        author: 'Mohd Amin Jalil',
        date: '2023-06-04T13:32:06.000Z',
        imageUrl: 'https://assets.bharian.com.my/images/articles/BH4TAKTANDING-O_BHfield_image_listing_featured.var_1685885724.jpg',
        language: 'ms',
        link: 'https://www.bharian.com.my/berita/nasional/2023/06/1110263/ahmad-faizal-tak-bertanding',
        publisherSlug: 'bh',
        sourceId: '1110263',
        title: 'Ahmad Faizal tak bertanding',
      },
      {
        author: 'Suzalina Halid',
        date: '2023-06-04T13:21:01.000Z',
        imageUrl: 'https://assets.bharian.com.my/images/articles/BH4AGONG-O_BHfield_image_listing_featured.var_1685884855.jpg',
        language: 'ms',
        link: 'https://www.bharian.com.my/berita/nasional/2023/06/1110261/jangan-jadikan-isu-agama-polemik-perbalahan-politik',
        publisherSlug: 'bh',
        sourceId: '1110261',
        title: 'Jangan jadikan isu agama polemik, perbalahan politik',
      },
      {
        author: '',
        date: '2023-06-04T13:15:03.000Z',
        imageUrl: 'https://assets.bharian.com.my/images/articles/BHINDIA_BHfield_image_listing_featured.var_1685884497.jpg',
        language: 'ms',
        link: 'https://www.bharian.com.my/dunia/asia/2023/06/1110256/nahas-kereta-api-india-siasatan-tumpu-sistem-pengurusan-trek-elektronik',
        publisherSlug: 'bh',
        sourceId: '1110256',
        title: 'Nahas kereta api India: Siasatan tumpu sistem pengurusan trek elektronik',
      },
    ];
    expect(new BHExtended().test(BeritaHarianFeed)).toEqual(expected);
  });
});
