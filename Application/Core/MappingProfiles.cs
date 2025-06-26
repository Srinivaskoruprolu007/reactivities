using System;
using AutoMapper;
using Domain;

public class MappingProfiles : Profile
{
    public MappingProfiles()
    {
        CreateMap<Activity, Activity>();
        
    }
}