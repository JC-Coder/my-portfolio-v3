import {defineField, defineType} from 'sanity'

export const educationType = defineType({
  name: 'education',
  title: 'Education',
  type: 'document',
  fields: [
    defineField({
      name: 'school',
      title: 'School',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'degree',
      title: 'Degree',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'type',
      title: 'Type',
      type: 'string',
    }),
    defineField({
      name: 'period',
      title: 'Period',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'location',
      title: 'Location',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'note',
      title: 'Note',
      type: 'string',
    }),
    defineField({
      name: 'logoType',
      title: 'Logo Type',
      type: 'string',
      options: {
        list: [
          {title: 'Image', value: 'image'},
          {title: 'Text', value: 'text'},
          {title: 'Text Pill', value: 'text-pill'},
        ],
      },
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'logo',
      title: 'Logo Upload',
      type: 'image',
      options: {hotspot: true},
      hidden: ({parent}) => parent?.logoType !== 'image',
    }),
    defineField({
      name: 'logoUrl',
      title: 'Logo URL or Path',
      type: 'string',
      hidden: ({parent}) => parent?.logoType !== 'image',
    }),
    defineField({
      name: 'logoText',
      title: 'Logo Text',
      type: 'string',
      hidden: ({parent}) => parent?.logoType === 'image',
    }),
    defineField({
      name: 'logoColor',
      title: 'Logo Color Classes',
      type: 'string',
      hidden: ({parent}) => parent?.logoType === 'image',
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
      title: 'school',
      subtitle: 'degree',
      media: 'logo',
    },
  },
})
