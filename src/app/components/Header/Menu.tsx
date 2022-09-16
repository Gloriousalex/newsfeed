import { StyledComponent }  from "../styles"
import ComputerIcon         from '@mui/icons-material/Computer';
import SportsEsportsIcon    from '@mui/icons-material/SportsEsports';
import PhoneIphoneIcon      from '@mui/icons-material/PhoneIphone';
import NewspaperIcon        from '@mui/icons-material/Newspaper';
import { CustomLink }       from "../CustomLink";

export const MenuGames =() => {

  return (
    <StyledComponent.MenuDiv>
      <StyledComponent.AllNews>
        <CustomLink to="/news/sort/all" key={'all'}>
        <NewspaperIcon sx={{ fontSize: 40, color: 'white', margin: 'auto', display: 'block' }}></NewspaperIcon>      
          All News</CustomLink>
      </StyledComponent.AllNews>
      <StyledComponent.CompGames>
      <CustomLink to="/news/sort/PC" key={'PC'}>
        <ComputerIcon
        sx={{ fontSize: 40, color: 'white', margin: 'auto', display: 'block' }}
        ></ComputerIcon>        
          PC News</CustomLink>
      </StyledComponent.CompGames>
      <StyledComponent.PsGames>
        <CustomLink to="/news/sort/console" key={'console'}>
          <SportsEsportsIcon
          sx={{ fontSize: 40, color: 'white', margin: 'auto', display: 'block' }}
          >       
          </SportsEsportsIcon>        
            Console News</CustomLink>
      </StyledComponent.PsGames>
      <StyledComponent.MobileGames>
        <CustomLink to="/news/sort/mobile" key={'mobile'}>
          <PhoneIphoneIcon
          sx={{ fontSize: 40, color: 'white', margin: 'auto', display: 'block' }}
          >       
          </PhoneIphoneIcon>       
            Mobile News</CustomLink>
      </StyledComponent.MobileGames>
    </StyledComponent.MenuDiv>
  );
}