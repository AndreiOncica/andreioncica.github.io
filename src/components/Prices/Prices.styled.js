import styled, { css } from 'styled-components'
import { colors } from '../../GlobalStyles'

export const PriceSection = styled.div`
    height: 400px;
    display: flex;
    align-items: center;
   

    .modal-overlay {
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: rgba(0, 0, 0, 0.5);
        display: flex;
        justify-content: center;
        align-items: center;
        z-index: 1000;
    }

    .modal {
        background-color: #fff;
        padding: 20px;
        border-radius: 8px;
        box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
        max-width: 80%;
        max-height: 80%;
        overflow-y: auto;
    }

    @media screen and (max-width: 768px) {
        .modal {
            max-width: 100%;
        }
    }

    .close {
        position: absolute;
        top: 10px;
        right: 10px;
        cursor: pointer;
    }

    .modal-content {
        max-height: calc(100vh - 150px);
        /* Adjust as needed */
    }

    table {
        width: 100%;
        border-collapse: collapse;
    }

    table th,
    table td {
        border: 1px solid #ddd;
        padding: 8px;
    }

    table th {
        background-color: #f2f2f2;
        text-align: left;
    }


    .prices__title {
        font-size: 1.5rem;
        font-weight: 500;
    }

    .prices__text {
        font-size: 1.25rem;
        font-weight: 300;
    }

`

