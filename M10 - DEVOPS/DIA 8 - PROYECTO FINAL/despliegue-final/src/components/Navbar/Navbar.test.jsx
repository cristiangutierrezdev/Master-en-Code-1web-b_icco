import { render, screen } from "@testing-library/react";
import { beforeEach, describe, expect, test } from "vitest";
import Navbar from "./Navbar";

describe("Navbar",()=>{
    beforeEach(()=>{
        render(<Navbar/>)
    })
    test("Deberia de mostrar el componente Navbar", ()=>{
        const texto = screen.findByText(/navbar/i);
        expect(texto).toBeDefined()
    })
})