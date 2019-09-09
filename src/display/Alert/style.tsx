
import styled from 'styled-components'

export const StyledAlert = styled.div`
  .alert {
      border: none;
      border-radius: 2px;
      position:relative;
      padding:0;

      .Text {
          vertical-align: top;
          padding:10px 10px;
          display:inline-block;
          width: calc(100% - 30px );
      }
      
      .alertIcon {
        position: relative;
        left: 0;
        height: 100%;
        #background: #f6f9fc;
        top: 0;
        display: inline-flex;
        align-items: center;
        justify-content: center;
        margin: 11px 0 10px 10px;
      }
      


    &-primary {
      background-color: rgba(204, 229, 255, 0.5);
    }

    &-danger {
      background-color: rgba(248, 215, 218, 0.5);
    }

    &-success {
        background-color: rgba(212, 237, 218, 0.5);
    }

    &-dismiss {
      background-color: rgba(255,243,205, 0.9);
    }
    
    &code {
      color: #f10075
    }

    close{
      display: inline;
      float: right !important;
    }

  }
`;