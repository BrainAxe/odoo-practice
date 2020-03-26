from odoo import api, models


class ReportCourses(models.AbstractModel):
    _name = 'report.openacademy.report_courses'

    @api.model
    def get_report_values(self, docids, data=None):
        self.model = self.env.context.get('active_model')
        docs = self.env[self.model].browse(self.env.context.get('active_id'))
        from_date = docs.date_from
        to_date = docs.date_to
        query = 'SELECT * FROM openacademy_course WHERE create_date BETWEEN \'{}\' AND \'{}\';'.format(from_date, to_date)
        # print(query)
        self._cr.execute(query)
        courses = self._cr.fetchall()
        return {'courses': courses}