
import styled from 'styled-components'
import { Label as ControlLabel } from 'reactstrap';

export const StyledLabel = styled(ControlLabel)`
    color: #333;
    font-weight: bold;
    font-size: 15px;`;

export const StyledContainer = styled.div`
    margin-bottom: 15px;`;

    /** overwrite quill div class to disabled */
export const StyledContainerDisabled = styled.div`
    margin-bottom: 15px;
    .quill {pointer-events: none !important}`;

    /** overwrite quill toolbar div class to disabled */
export const StyledContainerToolbarDisable = styled.div`
    margin-bottom: 15px;
    .ql-toolbar {pointer-events: none !important}`;