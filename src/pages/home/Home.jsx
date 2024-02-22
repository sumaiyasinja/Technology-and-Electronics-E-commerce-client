import Banner from '../../components/Banner/Banner';
import Team from '../../components/Team';
import Brands from './../../components/brands/Brands';
import ShopFAQAccordion from './../../components/ShopFAQAccordion';
import Subcriptions from './../../components/Subcriptions';


const Home = () => {
    return (
        <div>
             <Banner></Banner>
            <Brands></Brands>
            <ShopFAQAccordion></ShopFAQAccordion>
            <Team></Team>
            <Subcriptions></Subcriptions>
        </div>
    );
};

export default Home;