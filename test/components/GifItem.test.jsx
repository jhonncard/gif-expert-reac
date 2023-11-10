import {render, screen} from '@testing-library/react';
import {GifItem}from '../../src/components/GifItem';

describe('Name of de group', () => {
  const title ='saitama';
  const url = 'https://jac.com/saitama.jpg';

  test('debe hacer match con el snapshot', () => {
    const {container} =  render( <GifItem title={title} url={url} /> );
    expect(container).toMatchSnapshot();
  });

  test(' debe de mostrat la imagen y el url y el alt indicado', () => {
    render( <GifItem title={ title }  url={ url } /> );
    const { src, alt } = screen.getByRole('img');
    expect(src).toBe(url);
    expect(alt).toBe(alt);
  });
 
  test('debe de mostrta el titulo en el componente', () => {
    render( <GifItem title={ title }  url={ url } /> );
    expect( screen.getByAltText(title)).toBeTruthy();
  })




});