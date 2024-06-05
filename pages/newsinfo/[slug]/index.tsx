import { useRouter } from 'next/router';
import { NextPage } from 'next';
import Image from 'next/image';

const NewsInfoPage: NextPage = () => {
  const router = useRouter();
  const { slug, id } = router.query;

  return (
    <div className='overflow-hidden'>
      <div className='flex flex-wrap justify-center container mx-auto'>
        <section id='title' className='h-[300px] flex flex-col justify-center items-center text-center mt-5 md:mt-10 lg:mt-28'>
          <div id='button-category' className='mb-5'>
            <button className='border-hijau border-2 rounded-md py-1 px-2 mx-1 md:mx-2 text-sm'>
              AI
            </button>
            <button className='border-hijau border-2 rounded-md py-1 px-2 mx-1 md:mx-2 text-sm'>
              NEWS
            </button>
            <button className='border-hijau border-2 rounded-md py-1 px-2 mx-1 md:mx-2 text-sm'>
              SECURITY
            </button>
          </div>
          <h1 className='text-[18px] md:text-[35px] lg:text-[50px] font-semibold mb-5'>Cybersecurity di Era Kemajuan Teknologi Artificial Intelligence</h1>
          <span className='text-gray-500 text-sm font-semibold'>By admin | May 7, 2024 | No Comments</span>
        </section>
        <section id='desc' className='flex flex-wrap justify-center items-center text-justify mx-5 md:mx-0'>
          <div className='w-[100%]'>
            <Image
              src={"/img/test.jpg"}
              alt="ATM-master.png"
              width={1000}
              height={1000}
              className="m-2 w-[100%] h-[200px] lg:h-[700px] object-cover mx-auto"
            />
          </div>
          <div className='mt-10' >
            <p>Kecerdasan Buatan telah merevolusi banyak aspek kehidupan kita, termasuk cara kita melindungi data dan sistem dari ancaman siber. Di tahun 2024, penggunaan AI dalam cybersecurity telah menjadi lebih luas, memberikan baik peluang maupun tantangan baru. AI tidak hanya digunakan untuk meningkatkan keamanan tetapi juga oleh pelaku ancaman untuk menciptakan serangan yang lebih canggih.</p>
            
            <h1 className='font-semibold text-xl my-3'>Cybersecurity</h1>
            <p>Kecerdasan Buatan telah merevolusi banyak aspek kehidupan kita, termasuk cara kita melindungi data dan sistem dari ancaman siber. Di tahun 2024, penggunaan AI dalam cybersecurity telah menjadi lebih luas, memberikan baik peluang maupun tantangan baru. AI tidak hanya digunakan untuk meningkatkan keamanan tetapi juga oleh pelaku ancaman untuk menciptakan serangan yang lebih canggih.</p><br/>
            <p>Kecerdasan Buatan telah merevolusi banyak aspek kehidupan kita, termasuk cara kita melindungi data dan sistem dari ancaman siber. Di tahun 2024, penggunaan AI dalam cybersecurity telah menjadi lebih luas, memberikan baik peluang maupun tantangan baru. AI tidak hanya digunakan untuk meningkatkan keamanan tetapi juga oleh pelaku ancaman untuk menciptakan serangan yang lebih canggih.</p>
          </div>
          <div id='pembuat' className='my-10 w-full flex flex-row justify-start items-center'>
            <Image
              src={`/atm/user1.png`}
              alt={`ATM-master.png`}
              width={50}
              height={50}
              className="rounded-full mr-2 md:w-[70px] lg:w-[80px]"
            />
            <h1 className='text-xl'>Admin</h1>
          </div>
        </section>
      </div>
    </div>
  );
};

export default NewsInfoPage;