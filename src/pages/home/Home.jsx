import Banner from '../../components/Banner/Banner';
import Team from '../../components/Team';
import Brands from './../../components/brands/Brands';
import ShopFAQAccordion from './../../components/ShopFAQAccordion';


const Home = () => {
    return (
        <div>
             <Banner></Banner>
            <Brands></Brands>
            <Team></Team>
            <ShopFAQAccordion></ShopFAQAccordion>
        </div>
    );
};

export default Home;