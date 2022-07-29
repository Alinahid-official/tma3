# Generated by Django 4.0.1 on 2022-07-29 07:02

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Cpu',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=100, null=True)),
                ('short_name', models.CharField(max_length=100, null=True)),
                ('price', models.CharField(max_length=100, null=True)),
            ],
        ),
        migrations.CreateModel(
            name='Display',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=100, null=True)),
                ('short_name', models.CharField(max_length=100, null=True)),
                ('price', models.CharField(max_length=100, null=True)),
            ],
        ),
        migrations.CreateModel(
            name='HardDisk',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=100, null=True)),
                ('short_name', models.CharField(max_length=100, null=True)),
                ('price', models.CharField(max_length=100, null=True)),
            ],
        ),
        migrations.CreateModel(
            name='Ram',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=100, null=True)),
                ('short_name', models.CharField(max_length=100, null=True)),
                ('price', models.CharField(max_length=100, null=True)),
            ],
        ),
        migrations.CreateModel(
            name='Sound',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=100, null=True)),
                ('short_name', models.CharField(max_length=100, null=True)),
                ('price', models.CharField(max_length=100, null=True)),
            ],
        ),
        migrations.CreateModel(
            name='Computer',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('img', models.ImageField(null=True, upload_to='')),
                ('name', models.CharField(max_length=100, null=True)),
                ('cpu', models.ForeignKey(null=True, on_delete=django.db.models.deletion.CASCADE, to='part4.cpu')),
                ('display', models.ForeignKey(null=True, on_delete=django.db.models.deletion.CASCADE, to='part4.display')),
                ('hardDisk', models.ForeignKey(null=True, on_delete=django.db.models.deletion.CASCADE, to='part4.harddisk')),
                ('ram', models.ForeignKey(null=True, on_delete=django.db.models.deletion.CASCADE, to='part4.ram')),
                ('sound', models.ForeignKey(null=True, on_delete=django.db.models.deletion.CASCADE, to='part4.sound')),
            ],
        ),
        migrations.CreateModel(
            name='Cart',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('cpu', models.ForeignKey(null=True, on_delete=django.db.models.deletion.CASCADE, to='part4.cpu')),
                ('display', models.ForeignKey(null=True, on_delete=django.db.models.deletion.CASCADE, to='part4.display')),
                ('hardDisk', models.ForeignKey(null=True, on_delete=django.db.models.deletion.CASCADE, to='part4.harddisk')),
                ('ram', models.ForeignKey(null=True, on_delete=django.db.models.deletion.CASCADE, to='part4.ram')),
                ('sound', models.ForeignKey(null=True, on_delete=django.db.models.deletion.CASCADE, to='part4.sound')),
            ],
        ),
    ]