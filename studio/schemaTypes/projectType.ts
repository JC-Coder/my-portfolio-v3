import {defineField, defineType} from 'sanity'

export const projectType = defineType({
  name: 'project',
  title: 'Project',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'status',
      title: 'Status',
      type: 'string',
      initialValue: 'live',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'statusColor',
      title: 'Status Color Classes',
      type: 'string',
      initialValue: 'bg-emerald-500/10 text-emerald-500',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'text',
      rows: 4,
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'demoLink',
      title: 'Demo Link',
      type: 'url',
    }),
    defineField({
      name: 'videoUrl',
      title: 'Video URL',
      type: 'url',
    }),
    defineField({
      name: 'logo',
      title: 'Logo Upload',
      type: 'image',
      options: {hotspot: true},
    }),
    defineField({
      name: 'logoUrl',
      title: 'Logo URL or Path',
      type: 'string',
      description: 'Use this for existing public paths like /projects-logo/boifiok.png.',
    }),
    defineField({
      name: 'order',
      title: 'Display Order',
      type: 'number',
      initialValue: 0,
      validation: (rule) => rule.required().integer().min(0),
    }),
  ],
  orderings: [
    {
      title: 'Display Order',
      name: 'orderAsc',
      by: [{field: 'order', direction: 'asc'}],
    },
  ],
  preview: {
    select: {
      title: 'title',
      subtitle: 'status',
      media: 'logo',
    },
  },
})
