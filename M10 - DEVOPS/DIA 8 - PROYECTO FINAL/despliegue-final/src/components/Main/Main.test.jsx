import { render, screen } from "@testing-library/react";
import { beforeEach, describe, expect, test } from "vitest";
import Main from "./Main";

describe("Main",()=>{
    beforeEach(()=>{
        render(<Main/>)
    })
    test("Deberia de mostrar el componente Navbar", ()=>{
        const texto = screen.findByText(/Main/i);
        expect(texto).toBeDefined()
    })
})