'use client'
import { StarIcon } from '@radix-ui/react-icons';
import React,{useState} from 'react';
import * as NavigationMenu from '@radix-ui/react-navigation-menu';
import classNames from 'classnames';
import { CaretDownIcon } from '@radix-ui/react-icons';
import './globals.css';

function NavigationMenuDemo() {
    const [isAdminMenuOpen, setIsAdminMenuOpen] = useState(false);

    const handleAdminMenuToggle = () => {
      setIsAdminMenuOpen(!isAdminMenuOpen);
    };
  
    const handleLogout = () => {
      // Handle logout logic here
    };
    
    
  const handleSearch =(event) =>{
      event.preventDefault();
      const searchQuery = event.target.elements.search.value;
 console.log('Search Query:', searchQuery);
     };
    const ListItem = React.forwardRef(({ className, children, title, ...props }, forwardedRef) => (
        <li>
          <NavigationMenu.Link asChild>
            <a className={classNames('ListItemLink', className)} {...props} ref={forwardedRef}>
              <div className="ListItemHeading">{title}</div>
              <p className="ListItemText">{children}</p>
            </a>
          </NavigationMenu.Link>
        </li>
      ));
    
    return (
         <NavigationMenu.Root className="NavigationMenuRoot">

{/**/}
 <div className="LogoContainer">
                <img style={{ width: "130px" }} src="https://synergyers.com/wp-content/uploads/2023/03/WhatsApp_Image_2023-03-31_at_11.30.58_AM-removebg-preview-e1680259468273.png" alt="logo" className="LogoImage" />
            </div>
            <div className="SearchBarContainer">
            <form className="SearchBar" onSubmit={handleSearch}>
                <input type="text" placeholder="Search..." className="SearchInput" />
                <button type="submit" className="SearchButton">Search</button>
           {/* <i class="fa fa-file-text-alt"></i> */}
            </form>
            </div>
            
            <div className="AdminMenu">
          <button className="AdminMenuToggle" onClick={handleAdminMenuToggle}>
            Administration <CaretDownIcon className="CaretDown" aria-hidden />
          </button>
          {isAdminMenuOpen && (
            <div className="AdminMenuContent">
              <ul className="AdminMenuList">
                <li>
                  <button onClick={handleLogout} className="LogoutButton">
                    Logout
                  </button>
                </li>
                
              </ul>
            
            </div>
          )}
        
            </div>
            <div className="MenuContainer">
        <NavigationMenu.List className="NavigationMenuList">
        <StarIcon className="StarIcon" aria-hidden style={{ fontSize: '50px' }}  />
        
                <NavigationMenu.Item>
                    <NavigationMenu.Trigger className="NavigationMenuTrigger">
                        
                        <CaretDownIcon className="CaretDown" aria-hidden />
                    </NavigationMenu.Trigger>
                    <NavigationMenu.Content className="NavigationMenuContent">
                        <ul className="List one">
                            <li style={{ gridRow: 'span 4' }}>
                                <NavigationMenu.Link asChild>
                                    <a className="Callout" href="/"><svg aria-hidden width="38" height="38" viewBox="0 0 25 25" fill="white">


                                        {/* <path d="M12 25C7.58173 25 4 21.4183 4 17C4 12.5817 7.58173 9 12 9V25Z"></path>
    <path d="M12 0H4V8H12V0Z"></path>
    <path d="M17 8C19.2091 8 21 6.20914 21 4C21 1.79086 19.2091 0 17 0C14.7909 0 13 1.79086 13 4C13 6.20914 14.7909 8 17 8Z"></path> */}

                                    </svg>
                                        <div className="CalloutHeading"></div>
                                        {/* <p className="CalloutText"></p> */}
                                    </a>
                                </NavigationMenu.Link>
                            </li>

                            <ListItem href="https://stitches.dev/">
                                Add page to Favourties
                            </ListItem>
                            <ListItem href="/colors">
                                Manage Favourtie
                            </ListItem>

                            <ListItem href="https://icons.radix-ui.com/">
                                Manage Folders
                            </ListItem>
                            <ListItem href="https://icons.radix-ui.com/">
                                Help
                            </ListItem>
                        </ul>
                    </NavigationMenu.Content>
                </NavigationMenu.Item>

                <NavigationMenu.Item>
                    <NavigationMenu.Trigger className="NavigationMenuTrigger">

                        Setup <CaretDownIcon className="CaretDown" aria-hidden />
                    </NavigationMenu.Trigger>
                    <NavigationMenu.Content className="NavigationMenuContent">
                        <ul className="List two">
                            <ListItem title="Introduction" href="/docs/primitives/overview/introduction">
                                Build high-quality.
                            </ListItem>
                            <ListItem title="Getting started" href="/docs/primitives/overview/getting-started">
                                Getting Radix Primitives
                            </ListItem>
                            <ListItem title="Styling" href="/docs/primitives/overview/styling">
                                Unstyled and compatible with any styling solution.
                            </ListItem>
                            <ListItem title="Animation" href="/docs/primitives/overview/animation">
                                Use CSS keyframes or any animation.
                            </ListItem>
                            <ListItem title="Accessibility" href="/docs/primitives/overview/accessibility">
                                Tested in a range of browsers.
                            </ListItem>
                            <ListItem title="Releases" href="/docs/primitives/overview/releases">
                                Radix Primitives releases and their changelogs.
                            </ListItem>
                        </ul>
                    </NavigationMenu.Content>
                </NavigationMenu.Item>

                <NavigationMenu.Item>
                    <NavigationMenu.Link className="NavigationMenuLink" href="https://www.linkedin.com/uas/login-submit">
                        Lists
                    </NavigationMenu.Link>
                </NavigationMenu.Item>
                <NavigationMenu.Item>
                    <NavigationMenu.Link className="NavigationMenuLink" href="https://github.com/radix-ui">
                        PreSales
                    </NavigationMenu.Link>
                </NavigationMenu.Item>
                <NavigationMenu.Item>
                    <NavigationMenu.Link className="NavigationMenuLink" href="https://github.com/radix-ui">
                        Inventory
                    </NavigationMenu.Link>
                </NavigationMenu.Item>
                <NavigationMenu.Item>
                    <NavigationMenu.Link className="NavigationMenuLink" href="https://github.com/radix-ui">
                        Sales
                    </NavigationMenu.Link>
                </NavigationMenu.Item>
                <NavigationMenu.Item>
                    <NavigationMenu.Link className="NavigationMenuLink" href="https://github.com/radix-ui">
                        Accounting
                    </NavigationMenu.Link>
                </NavigationMenu.Item>
                <NavigationMenu.Item>
                    <NavigationMenu.Link className="NavigationMenuLink" href="https://github.com/radix-ui">
                        Reports
                    </NavigationMenu.Link>
                </NavigationMenu.Item>
                <NavigationMenu.Item>
                    <NavigationMenu.Link className="NavigationMenuLink" href="https://github.com/radix-ui">
                        Schedule
                    </NavigationMenu.Link>
                </NavigationMenu.Item>
               



                <NavigationMenu.Indicator className="NavigationMenuIndicator">
                    <div className="Arrow" />
                </NavigationMenu.Indicator>
            
            <div className="ViewportPosition">
                <NavigationMenu.Viewport className="NavigationMenuViewport" />
            </div>
           
            </NavigationMenu.List>
            </div>
        </NavigationMenu.Root>

        
        
    );
}

const ListItem = React.forwardRef(({ className, children, title, ...props }, forwardedRef) => (
  <li>
    <NavigationMenu.Link asChild>
      <a className={classNames('ListItemLink', className)} {...props} ref={forwardedRef}>
        <div className="ListItemHeading">{title}</div>
        <p className="ListItemText">{children}</p>
      </a>
    </NavigationMenu.Link>
  </li>
));

export default NavigationMenuDemo;