import { useState } from 'react';

const useAPI = () => {
    const [error, setError] = useState(null);

    const fetchData = async (url, options) => {
        try {
            const response = await fetch(url, options);

            if (!response.ok) {
                throw new Error('Hubo un problema al realizar la solicitud');
            }

            const data = await response.json();
            return data;
        } catch (error) {
            setError(error.message);
            throw error;
        }
    };

    const deleteData = async (url, options) => {
        try {
            const response = await fetch(url, options);

            if (!response.ok) {
                throw new Error('Hubo un problema al eliminar la publicación');
            }

            const data = await response.json();
            return data;
        } catch (error) {
            setError(error.message);
            throw error;
        }
    };
    const updateData = async (url, options) => {
        try {
            const response = await fetch(url, options);

            if (!response.ok) {
                throw new Error('Hubo un problema al actualizar la publicación');
            }

            const data = await response.json();
            return data;
        } catch (error) {
            setError(error.message);
            throw error;
        }
    };

    return { fetchData, updateData, deleteData, error };
};

export default useAPI;
