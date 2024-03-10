import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardActions from '@mui/material/CardActions';
import Button from '@mui/material/Button';
import Link from 'next/link';

const YourComponent = () => {
  // An array with data for each card
  const cardData = [
    { image: '/assets/images/pig1.jpeg', title: 'Amazon', link: '/amazon' },
    { image: '/assets/images/pig2.jpeg', title: 'Shopify', link: '/amazon' },
    { image: '/assets/images/pig3.jpeg', title: 'Ajio', link: '/amazon' },
    { image: '/assets/images/pig4.jpeg', title: 'FlipKart', link: '/amazon' },
  ];

  return (
    <div className="space">
    <h1 className='text-[40px] space2 py-20'>
            Choose your shop...
        </h1>

    <div className="flex justify-evenly space-x-10" >
      {cardData.map((data, index) => (
        <Card key={index} sx={{ maxWidth: 300, margin: '10px'}} className='space3'>
          <CardMedia sx={{ height: 300 }} image={data.image} title={data.title} />
          <CardActions>
            <p className='pl-[6px]'>{data.title}</p>
            <Link href={data.link}>
              <Button className='stu'>
                Track
              </Button>
            </Link>
          </CardActions>
        </Card>
      ))}
    </div>
    </div>
  );
};

export default YourComponent;
