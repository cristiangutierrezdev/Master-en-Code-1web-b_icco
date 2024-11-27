import { render, screen } from "@testing-library/react";
import { beforeEach, describe, expect, test } from "vitest";
import Footer from "./Footer";

describe("Footer",()=>{
    beforeEach(()=>{
        render(<Footer/>)
    })
    test("Deberia de mostrar el componente Navbar", ()=>{
        const texto = screen.findByText(/footer/i);
        expect(texto).toBeDefined()
    })
})