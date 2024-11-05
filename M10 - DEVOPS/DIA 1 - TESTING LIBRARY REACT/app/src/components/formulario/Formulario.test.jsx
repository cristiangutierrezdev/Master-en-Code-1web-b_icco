import { fireEvent, render, screen } from "@testing-library/react";
import { beforeEach, describe, expect, test } from "vitest";
import Formulario from "./Formulario";

describe("Formulario",()=>{
    beforeEach(()=>{
        render(<Formulario/>)
    })
    test("Deberia de renderizar el todo el componente", ()=>{
        const email = screen.getByPlaceholderText(/email/i)
        const password = screen.getByPlaceholderText(/password/i)
        expect(screen.getByText(/enviar/i)).toBeDefined()
        expect(email).toBeDefined()
        expect(password).toBeDefined()
    })
    test("Deberia de enviar si hay informacion", ()=>{
        const [email] = screen.queryAllByPlaceholderText(/email/i) 
        const [password] = screen.getAllByPlaceholderText(/password/i)
        const [boton] = screen.getAllByText(/enviar/i)

        expect(boton.getAttribute("disabled")).toBeDefined()

        fireEvent.change(email, {target:{value:"john@example.com"}})
        fireEvent.change(password, {target:{value:"john@example.com"}})

        expect(boton.getAttribute("disabled")).toBeNull()
    })
})