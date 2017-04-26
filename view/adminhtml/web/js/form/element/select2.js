/**
 * Copyright © 2016 Magento. All rights reserved.
 * See COPYING.txt for license details.
 */
define([
    'underscore',
    'uiRegistry',
    'Magento_Ui/js/form/element/select',
    'ko',
    'jquery',
    '../../lib/select2'
], function (_, registry, Abstract, ko, $, select2) {
    'use strict';

    ko.bindingHandlers.select2 = {
        init: function(element, valueAccessor, allBindings, viewModel, bindingContext){

            var $element = $(element);
            var options = ko.unwrap(valueAccessor());

            $element.select2(options);

            $(element).on('select2:selecting select2:unselecting', function () {
                console.log('change')
            });


        }
    }

    return Abstract.extend({

        defaults: {
            select2: {}
        },

        initObservable: function () {
            this._super();

            this.observe('select2');

            return this;
        },

    });
});