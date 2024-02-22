
const Footer = () => {
    let current_date = new Date()
    let current_year= current_date.getFullYear()
    return (
        <div>
            Copyright © {current_year} Bytopia. All rights reserved.
        </div>
    );
};

export default Footer;