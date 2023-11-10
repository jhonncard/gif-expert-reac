import { fireEvent, render , screen} from '@testing-library/react';
import { AddCategory } from '../../src/components/AddCategory';


describe('pruebas de <Addcategory />', () => {

    const inputValue ='Saitama';
   

    test('debe de cambiar el valor de la caja de texto ', () => {
      render(<AddCategory onNewCategory={() => {}} />);
 
      const input = screen.getByRole('textbox');

      fireEvent.input(input,{target: {value:inputValue}});
      expect (input.value).toBe('Saitama');
     
    });
    
    test(' debe de llama el onNewCategory si el imput tiene un valor ', () => {
        const onNewCategory = jest.fn();

        render(<AddCategory onNewCategory={ onNewCategory } />);

        const input = screen.getByRole('textbox');
        const form = screen.getByRole('form');

        fireEvent.input(input,{target: {value:inputValue}});
        fireEvent.submit(form);

        expect (input.value).toBe('');
        expect (onNewCategory).toHaveBeenCalled();
        expect (onNewCategory).toHaveBeenCalledTimes(1);
        expect (onNewCategory).toHaveBeenCalledWith(inputValue);

        
    })
    
    test(' no debe de llama el onNewCategory si el imput esta vacio ', () => {
        const onNewCategory = jest.fn();

        render(<AddCategory onNewCategory={ onNewCategory } />);

        const form = screen.getByRole('form');

        fireEvent.submit(form);

        expect (onNewCategory).not.toHaveBeenCalled();
       

        
    })

    
});

 