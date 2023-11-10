import { render , screen} from '@testing-library/react';
import { GifGrid } from '../../src/components/GifGrid';
import { useFetchGifs } from '../../src/hooks/useFetchGifs';

jest.mock('../../src/hooks/useFetchGifs')

describe('Pruebas en <Gifgrid  />', () => {
    const category = 'One Punch';
    
    test('debe de mostrar el loading inicialmente ', () => {

        useFetchGifs.mockReturnValue({
          images: [],
            isLoading: true
        });

        render( <GifGrid category={ category } /> );
        expect( screen.getByText( 'Cargando...' ) );
        expect( screen.getByText( category ) );

        screen.debug();


    });

    test('debe de mostrar el loading inicialmente ', () => {

        const gifs=[
            {
                id:'abc',
                title:'Saitama',
                url: 'https://localhost/saitama.js'

            },
            {
                id:'123',
                title:'goku',
                url: 'https://localhost/goku.js'

            },

        ]
        useFetchGifs.mockReturnValue({
          images: gifs,
            isLoading: true
        });

        render( <GifGrid category={ category } /> );
        expect( screen.getAllByRole( 'img' ).length ).toBe(2);
     

        screen.debug();


    });





    
});