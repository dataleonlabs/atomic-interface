
import styled from 'styled-components'
import { Label as ControlLabel } from 'reactstrap';

export const StyledLabel = styled(ControlLabel)`
    color: #333;
    font-weight: bold;
    font-size: 15px;`;

export const StyledContainer = styled.div`
    margin-bottom: 15px;
    padding-bottom: 70px;`;
    /** overwrite quill div class to disabled */
export const StyledContainerDisabled = styled.div`
    margin-bottom: 15px;
    padding-bottom: 70px;
    .quill {pointer-events: none !important; background-color: silver}
    .ql-editor{
        background-color: silver;
    }`;

    /** overwrite quill toolbar div class to disabled */
export const StyledContainerToolbarDisable = styled.div`
    margin-bottom: 15px;
    padding-bottom: 70px;
    .ql-toolbar {pointer-events: none !important; background-color: silver}`;