
const Logo = ({ size, Image, Text}) => {
  return (
    <img style={{height: size}} src={Image} alt={Text} />
  );
}

export default Logo;
