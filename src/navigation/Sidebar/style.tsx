
import styled from 'styled-components'



export const StyledSidebar = styled.div`
  flex-direction: column;
  width: 250px;
  border-right: solid 2px #eee;
  position:relative;

  .icon-nav-left {
    text-align:center
  
  }

  .sidebar-item-text {
    vertical-align: middle;
    color: #212529;
    a, a:hover {
      color: #212529;
      text-decoration: none;
    }
  }

  .icon-nav-right {
    float: right;
    margin-right: 0rem;
    margin-left: 0px;
    svg {
      margin: 0!important;
    }
  }

  .nav-link {
    padding:0.7rem 0.7rem;
    font-size: 1rem;
    cursor: pointer;
    border-left: solid 3px #fff;
    &:hover {
      background-color: #F6F6F6;
      border-left: solid 3px #007bff!important;
    }

    svg:first-child {
      // margin-right: 20px;
      margin-right: 10px;
      margin-left: 10px;
    }
  }

  .nav-item.active {
    .nav-link {
      color: #007bff;
      background-color: rgba(0, 123, 255, 0.05);
      border-left: solid 3px #007bff!important;
      .sidebar-item-text {
        color: #007bff;
      }
    }
  }

  .navbar-brand {
    display: block;
    padding: 1.2rem 1rem;
    cursor: pointer;
    margin-right: 0;
    padding-left: 1.95rem;
  }
  .NavHeader {
    display: block;
    padding: 1.2rem 1rem;
    cursor: pointer;
    margin-right: 0;
    padding-left: 1.95rem;
    font-size: 1rem;
    padding-bottom: 0.4rem;
    color: #777;
  }

  .brand-icon-close{
    position: absolute;
    right: -15px;
    border: 2px solid #007bff;
    border-radius: 100%;
    top: 15px;
    background: white;
    color: #007bff;
  
  }
  .brand-icon-open{
    position: absolute;
    right: -17px;
    border: 2px solid #007bff;
    border-radius: 100%;
    top: 15px;
    background: white;
    color:grey !important;
    padding:2px;
  }


  &.sidebarContainerTrue {
    
    border-right: solid 2px #007bff;
 
  }

  &.sidebarContainerFalse{

  }

  .emptyElement{
    position: absolute;
    top: 0;
    right: -10px;
    width: 5px;
    height: 400px;
    background: transparent;
  }

  &.sidebarContainer{
    width:80px !important;
    text-align:center !important;
  }
  &.sidebarContainer {

  .SidebarNav .sidebar-item-text,.NavHeader,.navbar-brand{
    display:none;
  }
}

`;