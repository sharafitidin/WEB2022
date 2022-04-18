from django.db import models


# Create your models here.


class Company(models.Model):
    name = models.CharField(max_length=100)
    description = models.TextField()
    city = models.CharField(max_length=100)
    address = models.TextField()
    objects = models.Manager()

    def __str__(self):
        return f'{self.id}:{self.name}'


    class Meta:
        verbose_name = "Company"
        verbose_name_plural = "Companies"


    def to_json(self):
        return {
            'id': self.id,
            'name': self.name,
            'description': self.description,
            'city': self.city,
            'address': self.address
        }


class Vacancy(models.Model):
    name = models.CharField(max_length=100)
    description = models.TextField()
    price = models.FloatField(default=0)
    company = models.ForeignKey(Company, on_delete=models.CASCADE)
    objects = models.Manager()


    def __str__(self):
        return f'{self.id}:{self.name}'


    class Meta:
        verbose_name = "Vacancy"
        verbose_name_plural = "Vacancies"


    def to_json(self):
        return {
            'name': self.name,
            'description': self.description,
            'price': self.price,
        }
