# -*- coding: utf-8 -*-

from odoo import models, fields, api

class Teachers(models.Model):
    _name = 'academy.teachers'

    name = fields.Char()
#     value = fields.Integer()
#     value2 = fields.Float(compute="_value_pc", store=True)
#     description = fields.Text()
#
#     @api.depends('value')
#     def _value_pc(self):
#         self.value2 = float(self.value) / 100


class Cities(models.Model):
    _name = 'academy.cities'

    name = fields.Char()
    population = fields.Integer()

    @api.model
    def get_cities_info(self):
        records = self.env['academy.cities'].search([],order="population desc")
        context = {}
        for record in records:
            context[record.name] = record.population
        return context


