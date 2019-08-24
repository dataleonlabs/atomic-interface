
import styled from 'styled-components'
import { UncontrolledPopover } from 'reactstrap';


export const StyledUncontrolledPopover = styled(UncontrolledPopover)`
border-radius: 3px!important;
  .popover {
    border: 1px solid #f5f5f5!important;
    .popover-inner {
      display: block;
      box-shadow: 0 0.25rem 0.75rem rgba(0,0,0,.1);
    }

    .popover-header, .popover-body {
      font-family: 'IBM Plex Sans', sans-serif;
    }
  }
`;