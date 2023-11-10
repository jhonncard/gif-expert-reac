import {getGifs} from "../../src/helpers/getGifs";
 
 describe('Pruebas de getGifs()', () => {
    
    test('debe de retornar una areglo de gift', async() => {
      
        const gifs = await getGifs('love');
       // console.log(gift);
       expect(gifs.length).toBeGreaterThan(0);
       expect(gifs[0]).toEqual({

          id: expect.any(String),
          title: expect.any(String),
          url: expect.any(String),
            
          });
 

    });
    

 });