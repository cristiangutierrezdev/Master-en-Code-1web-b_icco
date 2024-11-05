import { fireEvent, render, screen } from "@testing-library/react";
import { describe, expect, test } from "vitest";
import Boton from "./Boton";


// describe("Boton",()=>{
//     test("Deberia de sumar 2 numeros que su total de 3",()=>{
//         expect(1+2).toBe(3)
//     })
//     test("Deberia de restar dos numeros que su total sea 5",()=>{
//         expect(10 - 5).toBe(5)
//     })
//     test("Deberia enviar un mensaje que diga Hola mundo", ()=>{
//         expect("Hola mundo").toBe("Hola mundo")
//     })
// })

describe("Boton", ()=>{
    test("Deberia de mostrar el componente", ()=>{
        render(<Boton/>)
        const palabraBoton = screen.getByText("enviar")
        expect(palabraBoton).toBeDefined()
    })
    test("Si no pasan un prop deberia de aceptar enviar", ()=>{
        render(<Boton/>)
        const palabraBoton = screen.getAllByText("enviar")
        expect(palabraBoton).toBeDefined()
    })
    test("Si nos pasan un prop deberia de aceptarme el prop", ()=>{
        render(<Boton nombre="send"/>);
        const boton = screen.findByTestId("boton")
        expect(boton).toBeDefined()
    })

    test("Deberia de no mostrar el mensaje",()=>{
        render(<Boton/>)
        const mensaje = screen.queryByText(/lorem/i)
        expect(mensaje).toBeNull()
    })

    test("Deberia de mostrar un texto cuando le haga clic", ()=>{
        render(<Boton/>)
        const [boton] = screen.getAllByText("enviar")
        fireEvent.click(boton)
        expect(screen.getAllByText(/lorem/i)).toBeDefined()
    })

    test("Deberia de esconder el texto cuando se hace clic", ()=>{
        render(<Boton />)
        const [boton] = screen.getAllByText("enviar")
        fireEvent.click(boton)
        const mensaje = screen.queryByText(/lorem/i)
        expect(mensaje).toBeNull()
    })
})