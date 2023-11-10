import { renderHook ,waitFor } from "@testing-library/react";
import { useFetchGifs } from "../../src/hooks/useFetchGifs";


describe('pruebas en el hook useFetchGifs', () => {

    test('debe de reagresar el estado inicial', () => {

        const {result } =renderHook(()=> useFetchGifs('one punch'));
        const {images, isLoading  } = result.current ;
        console.log(result);
      
      expect(images.length).toBe(0);
      expect (isLoading).toBeTruthy();

    })
    
    test('debe de retornar un arreglo de imagenes y el is loadinf en falso', async() => {

        const { result } = renderHook( ()=> useFetchGifs('one punch') );
        
        await waitFor(
            () => expect (result.current.images.length).toBeGreaterThan(0)
        );
       
        const {images, isLoading  } = result.current ;

        expect(images.length).toBeGreaterThan(0);
        expect (isLoading).toBeFalsy();

    })





    
});