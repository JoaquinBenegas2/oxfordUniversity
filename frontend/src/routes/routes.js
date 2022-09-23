import { BrowserRouter, Routes, Route } from "react-router-dom";

// Views
import ListAlumnos from "../views/Alumnos/ListAlumnos"
import SaveAlumnos from "../views/Alumnos/SaveAlumnos";
import EditAlumnos from "../views/Alumnos/EditAlumnos";
import ViewAlumnos from "../views/Alumnos/ViewAlumnos";

import ListMatAlumno from "../views/Alumnos/ListMatAlumno";
import EditMatAlumno from "../views/Alumnos/EditMatAlumno";

import ListProfesores from "../views/Profesores/ListProfesores"
import SaveProfesores from "../views/Profesores/SaveProfesores";
import EditProfesores from "../views/Profesores/EditProfesores";
import ViewProfesores from "../views/Profesores/ViewProfesores";

import ListMaterias from "../views/Materias/ListMaterias"
import SaveMaterias from "../views/Materias/SaveMaterias";
import EditMaterias from "../views/Materias/EditMaterias";
import ViewMaterias from "../views/Materias/ViewMaterias";

export default function RoutesComponent() {
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/alumnos" element={<ListAlumnos />} />
                <Route path="/alumnos/add" element={<SaveAlumnos />} />
                <Route path="/alumnos/edit/:cod" element={<EditAlumnos />} />
                <Route path="/alumnos/view/:cod" element={<ViewAlumnos />} />
                
                <Route path="/alumnos/materias/:cod" element={<ListMatAlumno />} />
                <Route path="/alumnos/materias/edit/:cod_alumno/:cod_mat" element={<EditMatAlumno />} />

                <Route path="/profesores" element={<ListProfesores />} />
                <Route path="/profesores/add" element={<SaveProfesores />} />
                <Route path="/profesores/edit/:cod" element={<EditProfesores />} />
                <Route path="/profesores/view/:cod" element={<ViewProfesores />} />

                <Route path="/materias" element={<ListMaterias />} />
                <Route path="/materias/add" element={<SaveMaterias />} />
                <Route path="/materias/edit/:cod" element={<EditMaterias />} />
                <Route path="/materias/view/:cod" element={<ViewMaterias />} />
            </Routes>
        </BrowserRouter>
    );
}
