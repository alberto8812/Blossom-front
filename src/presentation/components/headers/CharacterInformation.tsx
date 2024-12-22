export const CharacterInformation = () => {
  return (
    <header className="bg-white p-4 flex items-center shadow-md">
      {" "}
      {/* Estilos generales del header */}
      <div className="flex items-center">
        {" "}
        {/* Contenedor para la imagen y el texto */}
        <div className="rounded-full overflow-hidden h-16 w-16 mr-4">
          {" "}
          {/* Contenedor para la imagen con forma circular */}
          <img
            src="URL_DE_TU_IMAGEN" // Reemplaza con la URL de tu imagen
            alt="Abadango Cluster Princess"
            className="object-cover w-full h-full" // Asegura que la imagen cubra todo el contenedor
          />
        </div>
        <div>
          <h1 className="text-xl font-semibold text-gray-800">
            Abadango Cluster Princess
          </h1>{" "}
          {/* Estilos del título */}
        </div>
      </div>
    </header>
  );
};
