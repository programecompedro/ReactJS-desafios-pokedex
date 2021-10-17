import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle
`
    html, body, div, span, applet, object, iframe,
    h1, h2, h3, h4, h5, h6, p, blockquote, pre,
    a, abbr, acronym, address, big, cite, code,
    del, dfn, em, img, ins, kbd, q, s, samp,
    small, strike, strong, sub, sup, tt, var,
    b, u, i, center,
    dl, dt, dd, ol, ul, li,
    fieldset, form, label, legend,
    table, caption, tbody, tfoot, thead, tr, th, td,
    article, aside, canvas, details, embed, 
    figure, figcaption, footer, header, hgroup, 
    menu, nav, output, ruby, section, summary,
    time, mark, audio, video {
        margin: 0;
        padding: 0;
        border: 0;
        font-size: 100%;
        font: inherit;
        vertical-align: baseline;
    }
    /* HTML5 display-role reset for older browsers */
    article, aside, details, figcaption, figure, 
    footer, header, hgroup, menu, nav, section {
        display: block;
    }
    body {
        line-height: 1;
    }
    ol, ul {
        list-style: none;
    }
    blockquote, q {
        quotes: none;
    }
    blockquote:before, blockquote:after,
    q:before, q:after {
        content: '';
        content: none;
    }
    table {
        border-collapse: collapse;
        border-spacing: 0;
    }

    body {
        margin: 0;
        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
          'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
          sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
      }
      
      code {
        font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
          monospace;
      }
      .rock {
        background-color: rgb(148, 81, 81);
      }
      .ghost {
        background-color: rgb(247, 247, 247);
      }
      .electric {
        background-color: rgb(255, 255, 161);
      }
      .bug {
        background-color: #F6D6A7;
      }
      .poison {
        background-color: #e0a7f6;
      }
      .normal {
        background-color: #F4F4F4;
      }
      .fairy {
        background-color: rgba(255, 192, 203, 0.863);
      }
      .fire {
        background-color: #FBE3DF;
      }
      .grass {
        background-color:#E2F9E1;
      }
      .water {
        background-color:#E0F1FD;
      }
      
      .app-contaner {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        min-height: 100vh;
        padding: 3rem 0.5rem;
      }
      .pokemon-container {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
      }
      .all-container {
        display: flex;
        flex-wrap: wrap;
        align-items: center;
        justify-content: center;
      }
      .thumb-container {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        padding: 1.5rem 0 ;
        margin: 0.3rem;
        border: 1px solid #efefef;
        border-radius: 0.2rem;
        min-width: 160px;
        text-align: center;
        box-shadow: 0 3px 15px rgba(0, 0, 0, 0.089);
      }
      h3 {
        margin-bottom: 0.2rem;
      }
      .thumb-container .number {
        border-radius: 1rem;
        padding: 0.2rem 0.4rem;
        background-color: rgba(255,255,255,0.3);
      }
      .thumb-container img {
        width: 120px;
        height: 120px;
      }
      .thumb-container small {
        text-transform: capitalize;
      }
      .detail-wrapper {
        display: flex;
        flex-direction: column;
        width: 100%;
      }
      .detail-wrapper button {
        color: rgb(22, 22, 22);
        padding: .5rem;
        margin-top: 1rem;
        border: none;
        border-radius: 0.2rem;
        cursor: pointer;
        background-color: rgba(0, 0, 0, 0.185);
      }
      .load-more {
        background: #f5f5f5 linear-gradient(#f5f5f5,#f1f1f1) repeat-x;
        border-radius: 2px;
        border: 1px solid #c6c6c6;
        color: #444;
        padding: 0.5rem 1.5rem;
        min-width: 50%;
        margin-top: 1rem;
      }
`;
 
export default GlobalStyle;