import { useNavigate } from "react-router-dom";
import React, { useRef } from 'react';

import { Menubar } from 'primereact/menubar';
import { useForm } from '../../hooks/useForm';
import { InputText } from 'primereact/inputtext';
import { Toast } from 'primereact/toast';


export const Navbar = () => {
    const navigate = useNavigate();

    const { searchText, onInputChange } = useForm({
        searchText: ''
    });

    const toast = useRef(null);

    const showError = () => {

        toast.current.show({ severity: 'error', summary: 'Campos Vacios', detail: 'Por favor ingresar un dato', life: 2000 });


    }

    const onSearchSubmit = (event) => {
        event.preventDefault();
        if (searchText.length <= 0) {
            showError();
        } else {
            navigate(`../search?q=${searchText}`);
        }
    }

    const home = () => {
        navigate('../login', {
            replace: true
        });
    }

    const items = [
        {
            label: 'Marvel',
            icon: 'pi pi-fw pi-file',
            command: () => {
                navigate('/marvel', {
                    replace: true
                });
            }
        },
        {
            label: 'DC',
            icon: 'pi pi-fw pi-pencil',
            command: () => {
                navigate('/dc', {
                    replace: true
                });
            }
        }
    ];

    const start = <img alt="logo" src="showcase/images/logo.png" onClick={home} onError={(e) =>
        e.target.src = 'https://www.primefaces.org/wp-content/uploads/2020/05/placeholder.png'} height="40" className="mr-2"></img>;
    const end = <>

        <form onSubmit={onSearchSubmit}>
            <span className="p-input-icon-right">

                <InputText className="w-full"
                    name="searchText"
                    placeholder="ingrese un dato"
                    value={searchText} onChange={onInputChange}
                    autoComplete="off" />
                <i className="pi pi-search" />
            </span>
        </form>
    </>;

    return (

        <div className="card">
            <Toast ref={toast} />
            <Menubar model={items} start={start} end={end} />

        </div>

    );
}

