from odoo import api, fields, models


class CourseWizard(models.TransientModel):
    _name = "course.wizard"
    _description = "Course wizard"

    date_from = fields.Date(string='Start Date')
    date_to = fields.Date(string='End Date')

    @api.multi
    def check_report(self):
        data = {}
        data['form'] = self.read(['date_from','date_to'])[0]
        # print(data)
        return self._print_report(data)

    def _print_report(self, data):
        data['form'].update(self.read(['date_from','date_to'])[0])
        print(data)
        return self.env.ref('openacademy.action_report_course').report_action(self, data=data)
