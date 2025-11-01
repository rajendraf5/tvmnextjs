// pages/working-process.js
import WorkingProcessSection from '@/components/WorkingProcessSection';
export default function WorkingProcessPage() {
  const slides = [
    {
      image: '/assets/images/main-staff.jpg',
      title: 'Staff',
      count: '200+',
      label: 'account balances processed each day',
      link: '#'
    },
    {
      image: '/assets/images/main-project.jpg',
      title: 'Project',
      count: '19',
      label: 'Murex specialists',
      link: '#'
    },
    {
      image: '/assets/images/main-partners.jpg',
      title: 'Partners',
      count: '16',
      label: 'Murex specialists',
      link: '#'
    },
    {
      image: '/assets/images/main-client.jpg',
      title: 'Client',
      count: '250',
      label: 'Murex specialists',
      link: '#'
    },
    {
      image: '/assets/images/main-staff.jpg',
      title: 'Serve Client',
      count: '10',
      label: 'Staff',
      link: '#'
    },
    {
      image: '/assets/images/main-years.jpg',
      title: 'Years',
      count: '12',
      label: 'Client',
      link: '#'
    }
  ];

  return (
    <WorkingProcessSection
      title="Working Process"
      heading="Our Working Process - How We Work For Our Customers"
      description="At TVM-LLC – IT Consulting Services For Your Business we provide comprehensive IT solutions tailored to meet the unique needs of your business. Whether you're a startup seeking scalability or an enterprise looking to streamline operations, our expert team is here to deliver innovative, reliable, and cost-effective technology services."
      slides={slides}
      ctaText="View All"
      ctaLink="/all-processes"
    />
  );
}
