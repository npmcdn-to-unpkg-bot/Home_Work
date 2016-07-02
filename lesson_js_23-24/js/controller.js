define(
    'controller',
    ['model', 'view', 'jquery'],
    function (model, view) {
        function Controller(model, view) {
            var self = this;

            view.elements.addBtn.on('click', addItem);
            view.elements.listContainer.on('click', '.item-delete', removeItem);
            view.elements.listContainer.on('click', '.item-edit', editItem);

            function addItem() {
                var newItem = view.elements.input.val();
                model.addItem(newItem);
                view.renderList(model.data);
                view.elements.input.val('');
            }

            function removeItem() {
                var item = $(this).attr('data-value');

                model.removeItem(item);
                view.renderList(model.data);
            }

            function editItem() {
                var item = $(this).attr('data-value');
                var index = model.itemEditIndex(item);
                var itemNew = $('<input type="text">');
                var saveItem = $('<span class="item-save">&#10003;</span>');
                $(this).parent().html('').append(itemNew).append(saveItem);
                saveItem.on('click', function () {
                    model.changeItem(itemNew.val(), index);
                    view.renderList(model.data);
                    itemNew.val('');
                })
            }
        }

        var controller = new Controller(model, view);
        
        return controller;
    }
);
