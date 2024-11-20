
export default function configuracoes_contato() {
    $(document).ready(function () {
        $('.campo_select').select2({
            placeholder: 'Selecione a coluna',
            width: '100%',
            minimumResultsForSearch: Infinity,
        });
    });
}
