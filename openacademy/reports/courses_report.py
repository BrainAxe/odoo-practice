from odoo import api, models


class ReportCourses(models.AbstractModel):
    _name = 'report.openacademy.report_courses'

    @api.model
    def get_report_values(self, docids, data=None):
        # self.model = self.env.context.get('active_model')
        # docs = self.env[self.model].browse(self.env.context.get('active_id'))
        # from_date = docs.date_from
        # to_date = docs.date_to
        # query = 'SELECT name, description, create_date FROM openacademy_course WHERE create_date BETWEEN \'{}\' AND \'{}\';'.format(from_date, to_date)
        # # print(query)
        # self._cr.execute(query)
        # courses = self._cr.fetchall()
        from_date = data['form']['date_from']
        to_date = data['form']['date_to']
        if data['form']:
            courses = self.env['openacademy.course'].search([('create_date', '>=', from_date), ('create_date', '<=', to_date)])
        else:
            courses = self.env['openacademy.course'].search([])
        return {'courses': courses}
